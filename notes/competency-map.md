# Competency Map

This document is the evolving competency map for the study of **computational science, mathematical modeling, and numerical simulation**.

Its purpose is to answer one question:

> What should I progressively know and be able to do to model, simulate, verify, analyze, and communicate natural processes computationally?

This is not a fixed curriculum. It will evolve as new courses, projects, papers, tools, and scientific problems are encountered.

## Progress levels

- **Planned** — identified as useful, not yet studied seriously
- **In progress** — currently being learned
- **Practiced** — applied in exercises or small projects
- **Consolidated** — understood well enough to reuse independently
- **Advanced** — used in substantial scientific work or research-level study

---

## 1. Scientific modeling

**Goal:** turn a real phenomenon into a useful scientific representation.

| Competency | Status |
|---|---|
| Distinguish reality, model, simulation, and numerical experiment | In progress |
| Formulate a precise scientific question | In progress |
| Identify relevant variables and parameters | In progress |
| Choose the appropriate modeling scale | In progress |
| Distinguish microscopic, mesoscopic, and macroscopic descriptions | In progress |
| Decide whether space and/or time are required by the model | In progress |
| Choose between continuous, time-step, and event-driven time representations | In progress |
| Distinguish Eulerian and Lagrangian spatial descriptions | In progress |
| Recognize when interactions should be represented by a graph/network | In progress |
| State assumptions explicitly | In progress |
| Recognize that one phenomenon can admit several valid models | In progress |
| Identify interactions, mechanisms, and conservation principles | In progress |
| Compare alternative modeling approaches | Planned |
| Build multi-scale models | Planned |
| Couple several physical or biological processes | Planned |

---

## 2. Mathematical foundations

**Goal:** acquire the mathematical language needed to formulate and analyze models.

### Calculus

- Functions and rates of change
- Limits and continuity
- Differential calculus
- Integral calculus
- Multivariable calculus
- Vector calculus
- Gradient, divergence, and curl

Status: **In progress / planned**

### Linear algebra

- Vectors and matrices
- Linear systems
- Eigenvalues and eigenvectors
- Orthogonality
- Matrix factorizations
- Sparse matrices
- Numerical linear algebra

Status: **Planned**

### Differential equations

- Ordinary differential equations (ODEs)
- Systems of ODEs
- Stability and phase-space analysis
- Partial differential equations (PDEs)
- Initial and boundary value problems

Status: **Planned**

### Probability and statistics

- Random variables and distributions
- Expectation and variance
- Sampling
- Stochastic processes
- Statistical estimation
- Uncertainty quantification

Status: **Planned**

### Optimization

- Unconstrained optimization
- Constrained optimization
- Gradient-based methods
- Parameter estimation
- Inverse problems
- Optimal control

Status: **Planned**

---

## 3. Numerical analysis

**Goal:** understand how continuous mathematical models become reliable computations.

| Competency | Status |
|---|---|
| Discretize space and time | In progress |
| Understand the role of spatial meshes/grids | In progress |
| Understand the role of the time step Delta_t | In progress |
| Understand truncation and approximation errors | Planned |
| Measure numerical accuracy | Planned |
| Understand consistency | Planned |
| Understand convergence | Planned |
| Understand numerical stability | Planned |
| Choose an appropriate time step and spatial resolution | Planned |
| Compare explicit and implicit schemes | Planned |
| Numerical integration and quadrature | Planned |
| Root finding | Planned |
| Numerical differentiation | Planned |
| Solve linear systems numerically | Planned |
| Solve ODEs numerically | Planned |
| Solve PDEs numerically | Planned |
| Perform mesh/grid refinement studies | Planned |

---

## 4. Core simulation methodologies

**Goal:** know the main families of models and recognize when each is appropriate.

### Continuous and equation-based models

- Dynamical systems
- ODE models
- PDE models
- Conservation laws

Status: **Planned**

### Stochastic methods

- Monte Carlo methods
- Random walks
- Stochastic simulation

Status: **Planned**

### Discrete models

- Cellular automata
- Lattice-gas models
- Discrete-event simulation

Status: **Discrete-event simulation introduced; others planned**

### Particle and many-body methods

- Particle systems
- Molecular dynamics
- N-body simulation
- Barnes-Hut and tree methods

Status: **Lagrangian viewpoint introduced; methods planned**

### Mesoscopic fluid methods

- Lattice Boltzmann methods
- Collision and streaming
- Boundary conditions
- Recovery of macroscopic quantities

Status: **Planned**

### Agent-based modeling

- Agents and environments
- Interaction rules
- Emergent behavior
- Multi-agent systems

Status: **Planned**

### Graphs and complex networks

- Nodes and edges as model components and interactions
- Dynamic networks
- Degree and degree distributions
- Clustering
- Centrality
- Network topology and dynamics

Status: **Introduced**

---

## 5. Scientific programming

**Goal:** turn a model into correct, efficient, readable, reusable code.

### Python scientific stack

- Python fundamentals
- NumPy
- SciPy
- Matplotlib
- Jupyter
- Data handling
- Scientific file formats

Status: **In progress**

### Software engineering for science

- Modular code
- Functions and classes
- Documentation
- Testing
- Debugging
- Version control
- Code review
- Reusable numerical components

Status: **Planned / in progress**

### Performance

- Profiling
- Vectorization
- Memory management
- Algorithmic complexity
- Efficient data structures

Status: **Planned**

---

## 6. High-performance computing

**Goal:** scale simulations beyond a single simple program.

- Parallel computing concepts
- Shared-memory parallelism
- Distributed-memory computing
- GPU computing
- Domain decomposition
- Parallel numerical algorithms
- Performance profiling
- Scalability
- Scientific computing clusters
- Reproducible HPC workflows

Status: **Planned**

---

## 7. Verification, validation, and credibility

**Goal:** determine whether a simulation is implemented correctly and whether it is scientifically trustworthy.

| Competency | Status |
|---|---|
| Distinguish verification from validation | In progress |
| Test code against known solutions | In progress |
| Compare numerical results with theory | Planned |
| Compare simulations with experimental or observational data | In progress |
| Perform parameter calibration | In progress |
| Distinguish calibration from validation | In progress |
| Conduct sensitivity analysis | Planned |
| Quantify numerical uncertainty | Planned |
| Quantify model uncertainty | Planned |
| Build validation datasets and benchmarks | Planned |
| Document limitations and domains of validity | Planned |

---

## 8. Scientific data analysis and visualization

**Goal:** interpret simulation outputs rather than merely generate them.

- Time-series visualization
- Phase-space plots
- Vector fields
- Scalar fields
- Contours and isosurfaces
- Streamlines
- 2D and 3D scientific visualization
- Animation of simulations
- Statistical summaries
- Comparison between simulations and observations
- ParaView or equivalent scientific visualization tools

Status: **Planned**

---

## 9. Reproducible computational science

**Goal:** make a numerical experiment understandable and repeatable by another researcher.

- Git and GitHub
- Repository organization
- Environment management
- Dependency management
- Reproducible notebooks
- Automated tests
- Continuous integration
- Containers and Docker
- Data provenance
- Parameter/configuration files
- Experiment metadata
- Reproducible figures and results

Status: **In progress**

---

## 10. Domain science

**Goal:** understand enough of the application domain to choose meaningful variables, assumptions, equations, and validation criteria.

Possible domains include:

- Fluid mechanics
- Mechanics
- Astrophysics
- Climate and atmosphere
- Hydrology and rivers
- Oceanography
- Natural hazards
- Ecology
- Population dynamics
- Biology and biomedical systems
- Materials
- Energy
- Traffic and pedestrian systems
- Socio-economic systems

Status: **Developed progressively according to projects**

---

## 11. Scientific communication

**Goal:** explain what was modeled, why, how, and with what limitations.

- Write clear model assumptions
- Explain variables and parameters
- Document numerical methods
- Present verification and validation evidence
- Produce interpretable figures
- Write scientific reports
- Maintain readable notebooks
- Present computational results orally
- Distinguish observation, assumption, inference, and conclusion

Status: **Planned / developed continuously**

---

## 12. Advanced directions

These are long-term extensions once the foundations are solid.

### Scientific machine learning

- Physics-informed neural networks
- Neural operators
- Surrogate models
- Reduced-order modeling
- Data-driven discovery of equations
- Hybrid physics/data models

Status: **Planned**

### Inverse problems and data assimilation

- Infer parameters from observations
- State estimation
- Data assimilation
- Bayesian inverse problems

Status: **Planned**

### Digital twins

- Real-time model updating
- Sensor-model integration
- Predictive simulation
- Decision support

Status: **Planned**

### Uncertainty quantification

- Parameter uncertainty
- Model-form uncertainty
- Propagation of uncertainty
- Probabilistic predictions

Status: **Planned**

---

## 13. Evidence of mastery

A competency should progressively move from theory to evidence.

Possible evidence includes:

- a worked mathematical derivation;
- a Jupyter notebook;
- a Python implementation;
- a numerical experiment;
- a verification test;
- a validation comparison;
- a visualization;
- a reproducible GitHub project;
- a short scientific report;
- an independent extension of a model.

The repository should therefore show not only **what was studied**, but also **what can actually be done**.

---

## 14. Current focus

Current study focus:

**Scientific modeling fundamentals — representation of space and time**

Topics currently being developed:

- purpose of a model;
- choice of scientific question;
- modeling scale;
- model versus simulation;
- numerical experiment;
- continuous versus discretized time;
- event-driven time;
- Eulerian versus Lagrangian descriptions;
- spatial meshes and grids;
- graph/network representations of interactions;
- verification and validation;
- computational science as an interdisciplinary field.

This map will be updated whenever a new competency is introduced, practiced, or consolidated.
