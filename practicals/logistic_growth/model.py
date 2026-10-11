"""Logistic growth: analytical solution and elementary numerical solvers.

Only uses the Python standard library. All units and assumptions are documented
in README.md; the integrators intentionally do not clamp numerical results.
"""

from __future__ import annotations

import argparse
import csv
import math
import sys
from pathlib import Path


def validate(initial: float, rate: float, capacity: float, duration: float, steps: int) -> None:
    """Restrict the experiment to positive growth below carrying capacity."""
    if not all(math.isfinite(v) for v in (initial, rate, capacity, duration)):
        raise ValueError("All parameters must be finite")
    if not (0.0 < initial < capacity):
        raise ValueError("Expected 0 < initial < capacity")
    if rate <= 0.0 or duration <= 0.0:
        raise ValueError("Rate and duration must be strictly positive")
    if not isinstance(steps, int) or steps < 1:
        raise ValueError("Steps must be a positive integer")


def rhs(population: float, rate: float, capacity: float) -> float:
    """dN/dt = r*N*(1 - N/K)."""
    return rate * population * (1.0 - population / capacity)


def exact_solution(time: float, initial: float, rate: float, capacity: float) -> float:
    """Analytical solution for positive initial populations and rates."""
    if not all(math.isfinite(v) for v in (time, initial, rate, capacity)):
        raise ValueError("All parameters must be finite")
    if time < 0 or not (0.0 < initial < capacity) or rate <= 0:
        raise ValueError("Expected time >= 0, 0 < initial < capacity and rate > 0")
    return capacity / (1.0 + (capacity / initial - 1.0) * math.exp(-rate * time))


def step_euler(population: float, dt: float, rate: float, capacity: float) -> float:
    return population + dt * rhs(population, rate, capacity)


def step_rk4(population: float, dt: float, rate: float, capacity: float) -> float:
    k1 = rhs(population, rate, capacity)
    k2 = rhs(population + 0.5 * dt * k1, rate, capacity)
    k3 = rhs(population + 0.5 * dt * k2, rate, capacity)
    k4 = rhs(population + dt * k3, rate, capacity)
    return population + dt * (k1 + 2 * k2 + 2 * k3 + k4) / 6.0


def simulate(
    method: str = "rk4", *, initial: float = 10.0, rate: float = 0.8,
    capacity: float = 100.0, duration: float = 5.0, steps: int = 40,
) -> list[tuple[float, float, float, float]]:
    """Return (time, numerical, analytical, absolute_error), including t=0."""
    validate(initial, rate, capacity, duration, steps)
    if method not in {"euler", "rk4"}:
        raise ValueError("Method must be 'euler' or 'rk4'")
    step = step_euler if method == "euler" else step_rk4
    dt = duration / steps
    population = initial
    results = []
    for index in range(steps + 1):
        time = duration * index / steps
        exact = exact_solution(time, initial, rate, capacity)
        results.append((time, population, exact, abs(population - exact)))
        if index < steps:
            population = step(population, dt, rate, capacity)
    return results


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Compare Euler/RK4 with exact logistic growth")
    parser.add_argument("--method", choices=["euler", "rk4"], default="rk4")
    parser.add_argument("--initial", type=float, default=10.0)
    parser.add_argument("--rate", type=float, default=0.8)
    parser.add_argument("--capacity", type=float, default=100.0)
    parser.add_argument("--duration", type=float, default=5.0)
    parser.add_argument("--steps", type=int, default=40)
    parser.add_argument("--output", type=Path, help="CSV output path; stdout by default")
    args = parser.parse_args(argv)
    try:
        results = simulate(
            args.method, initial=args.initial, rate=args.rate,
            capacity=args.capacity, duration=args.duration, steps=args.steps,
        )
    except ValueError as exc:
        parser.error(str(exc))
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        with args.output.open("w", encoding="utf-8", newline="") as handle:
            writer = csv.writer(handle)
            writer.writerow(("time", "numerical", "analytical", "absolute_error"))
            writer.writerows(results)
        print(f"Saved {len(results)} rows to {args.output}")
    else:
        writer = csv.writer(sys.stdout)
        writer.writerow(("time", "numerical", "analytical", "absolute_error"))
        writer.writerows(results)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
