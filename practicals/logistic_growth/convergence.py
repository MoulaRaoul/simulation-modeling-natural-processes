"""Small refinement experiment: numerical error at fixed final time."""

from model import simulate


def main() -> None:
    print("method,steps,dt,final_absolute_error")
    duration = 5.0
    for method in ("euler", "rk4"):
        for steps in (10, 20, 40, 80):
            error = simulate(method, duration=duration, steps=steps)[-1][3]
            print(f"{method},{steps},{duration / steps:.6g},{error:.12g}")


if __name__ == "__main__":
    main()
