"""Run: python -m unittest discover -s practicals/logistic_growth -p 'test_*.py' -v"""

import unittest

from model import exact_solution, simulate


class LogisticGrowthTests(unittest.TestCase):
    def test_exact_initial_value(self):
        self.assertAlmostEqual(exact_solution(0.0, 10.0, 0.8, 100.0), 10.0)

    def test_exact_solution_approaches_capacity(self):
        self.assertAlmostEqual(exact_solution(100.0, 10.0, 0.8, 100.0), 100.0, places=10)

    def test_simulation_grid_and_initial_error(self):
        rows = simulate("rk4", duration=5.0, steps=40)
        self.assertEqual(len(rows), 41)
        self.assertEqual(rows[0], (0.0, 10.0, 10.0, 0.0))
        self.assertAlmostEqual(rows[-1][0], 5.0)

    def test_refinement_reduces_euler_error(self):
        coarse = simulate("euler", steps=20)[-1][3]
        fine = simulate("euler", steps=40)[-1][3]
        self.assertLess(fine, coarse)

    def test_refinement_reduces_rk4_error(self):
        coarse = simulate("rk4", steps=10)[-1][3]
        fine = simulate("rk4", steps=20)[-1][3]
        self.assertLess(fine, coarse)

    def test_rk4_is_more_accurate_on_reference_parameters(self):
        euler = simulate("euler", steps=40)[-1][3]
        rk4 = simulate("rk4", steps=40)[-1][3]
        self.assertLess(rk4, euler)

    def test_population_stays_positive_with_reference_steps(self):
        values = [row[1] for row in simulate("rk4", steps=40)]
        self.assertTrue(all(0 < value < 100 for value in values))
        self.assertTrue(all(a <= b for a, b in zip(values, values[1:])))

    def test_invalid_parameters_rejected(self):
        cases = (
            {"initial": -1.0}, {"initial": 100.0},
            {"capacity": -5.0}, {"rate": 0.0},
            {"duration": 0.0}, {"steps": 0},
        )
        for kwargs in cases:
            with self.subTest(kwargs=kwargs), self.assertRaises(ValueError):
                simulate(**kwargs)
        with self.assertRaises(ValueError):
            simulate("unknown")


if __name__ == "__main__":
    unittest.main()
