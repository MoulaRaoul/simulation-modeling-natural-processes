# Experiment 01 — Logistic Growth (Euler vs. RK4)

A small, **reproducible numerical experiment** comparing two integration methods to the exact solution of an ordinary differential equation (ODE). Implemented in pure Python, without external dependencies.

## Model

For a population `N(t)` and positive growth rate `r`, with carrying capacity `K`:

\[
\frac{dN}{dt}=rN\left(1-\frac{N}{K}\right),\quad N(0)=N_0.
\]

Under the deliberately restricted experimental conditions `0 < N₀ < K`, `r > 0`, `t ≥ 0`, the exact solution is:

\[
N(t)=\frac{K}{1+(K/N_0-1)e^{-rt}}.
\]

The experiment uses `N₀ = 10`, `r = 0.8` per unit time, `K = 100` individuals, and a final time `T = 5` by default. These are illustrative parameters, **not measured data**. Euler and classical fourth-order Runge–Kutta (RK4) approximate the same initial-value problem using fixed step sizes.

## Reproduce

From the repository root, with Python 3.10+:

```bash
python practicals/logistic_growth/model.py --method euler --steps 40 --output results/euler.csv
python practicals/logistic_growth/model.py --method rk4 --steps 40 --output results/rk4.csv
python practicals/logistic_growth/convergence.py
python -m unittest discover -s practicals/logistic_growth -p "test_*.py" -v
```

Without `--output`, `model.py` writes a CSV table to standard output. Each row includes time, numerical estimate, exact value and absolute error. The convergence script reports the final-time absolute error for both methods with 10, 20, 40 and 80 steps.

## What to examine

1. Euler has a global error of order O(h) in the asymptotic regime.
2. RK4 has a global error of order O(h⁴) in the asymptotic regime.
3. Smaller steps generally improve accuracy at greater computational cost.
4. At coarse step sizes, numerical behavior may be inaccurate or unstable. The code **does not artificially clamp** populations to [0, K]; this makes numerical defects observable.

## Verification vs. validation

The unit tests check the initial condition, output grid, domain restrictions, convergence direction and relative accuracy with these reference parameters. The known analytical solution is a strong **numerical verification** reference; it does **not** validate logistic growth as a model of any particular real population.

## Limits and next steps

The experiment assumes deterministic homogeneous growth, constant parameters, no spatial structure, and no uncertainty in model parameters. Future extensions: error-versus-step log–log figures, automated convergence-rate estimation, parameter sensitivity and comparison to observed data (where licensed data are available).
