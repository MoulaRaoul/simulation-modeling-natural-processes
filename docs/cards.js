/*
  Living flashcard dataset.

  Add new cards at the end of FLASHCARDS.
  Keep IDs unique and stable because learning progress is stored by ID in localStorage.
*/
window.FLASHCARDS = [
  {
    id: "m1-modeling-simulation-001",
    module: "Module 1",
    lesson: "Modeling and Simulation",
    question: "What physical phenomenon is described by the Navier–Stokes equation?",
    answer: "Flow of a fluid",
    tags: ["fluids", "PDE"]
  },
  {
    id: "m1-modeling-simulation-002",
    module: "Module 1",
    lesson: "Modeling and Simulation",
    question: "What does a numerical experiment create inside the computer?",
    answer: "A virtual universe of the model",
    tags: ["numerical experiment"]
  },
  {
    id: "m1-modeling-simulation-003",
    module: "Module 1",
    lesson: "Modeling and Simulation",
    question: "What does field knowledge primarily help with in modeling?",
    answer: "Selecting important model ingredients",
    tags: ["modeling", "domain knowledge"]
  },
  {
    id: "m1-modeling-simulation-004",
    module: "Module 1",
    lesson: "Modeling and Simulation",
    question: "After code verification, what potential problem may still remain?",
    answer: "The underlying model may be wrong",
    tags: ["verification", "validation"]
  },
  {
    id: "m1-modeling-simulation-005",
    module: "Module 1",
    lesson: "Modeling and Simulation",
    question: "What does “avoid to do too much” suggest about adding detail to a model?",
    answer: "Excess detail should be avoided",
    tags: ["simplification", "modeling"]
  },
  {
    id: "m1-modeling-simulation-006",
    module: "Module 1",
    lesson: "Modeling and Simulation",
    question: "When simulating traffic, what level of description is recommended?",
    answer: "The level of individual cars",
    tags: ["scale", "traffic"]
  },
  {
    id: "m1-modeling-simulation-007",
    module: "Module 1",
    lesson: "Modeling and Simulation",
    question: "What is the main purpose of simplifying a model, according to the source?",
    answer: "Capture just what you want",
    tags: ["simplification", "modeling"]
  },
  {
    id: "m1-modeling-simulation-008",
    module: "Module 1",
    lesson: "Modeling and Simulation",
    question: "In the Einstein quote, what does the phrase “not simpler” warn against?",
    answer: "Excessive simplification",
    tags: ["simplification"]
  },
  {
    id: "m1-modeling-simulation-009",
    module: "Module 1",
    lesson: "Modeling and Simulation",
    question: "What does modeling a process allow us to do before acting on the real system?",
    answer: "Predict its evolution",
    tags: ["prediction", "modeling"]
  },
  {
    id: "m1-modeling-simulation-010",
    module: "Module 1",
    lesson: "Modeling and Simulation",
    question: "Conceptually, into what is the atmosphere divided when modeled as fluid elements?",
    answer: "Small volumetric cubes",
    tags: ["scale", "fluids"]
  },
  {
    id: "m1-space-time-001",
    module: "Module 1",
    lesson: "Modeling Space and Time",
    question: "When can the spatial dimension be omitted from a model?",
    answer: "When only a global quantity matters and the locations of individual components are not relevant.",
    tags: ["space", "modeling choice"]
  },
  {
    id: "m1-space-time-002",
    module: "Module 1",
    lesson: "Modeling Space and Time",
    question: "When can the temporal dimension be omitted from a model?",
    answer: "When the process is treated as steady and does not need to evolve in time.",
    tags: ["time", "steady state"]
  },
  {
    id: "m1-space-time-003",
    module: "Module 1",
    lesson: "Modeling Space and Time",
    question: "How is continuous time commonly represented in a computer simulation?",
    answer: "By discretizing it into successive time steps of size Delta t.",
    tags: ["time", "discretization"]
  },
  {
    id: "m1-space-time-004",
    module: "Module 1",
    lesson: "Modeling Space and Time",
    question: "What is the key idea of discrete-event simulation?",
    answer: "Represent the system mainly at the times when relevant events occur rather than at every regular time step.",
    tags: ["time", "discrete-event simulation"]
  },
  {
    id: "m1-space-time-005",
    module: "Module 1",
    lesson: "Modeling Space and Time",
    question: "What does an Eulerian description observe?",
    answer: "How a physical property or system state changes at fixed positions in space.",
    tags: ["space", "Eulerian"]
  },
  {
    id: "m1-space-time-006",
    module: "Module 1",
    lesson: "Modeling Space and Time",
    question: "How is continuous space commonly represented in an Eulerian computer model?",
    answer: "It is discretized into cells or elements forming a mesh or grid.",
    tags: ["space", "mesh", "Eulerian"]
  },
  {
    id: "m1-space-time-007",
    module: "Module 1",
    lesson: "Modeling Space and Time",
    question: "What does a Lagrangian description follow?",
    answer: "Moving objects or particles and their positions or trajectories over time.",
    tags: ["space", "Lagrangian"]
  },
  {
    id: "m1-space-time-008",
    module: "Module 1",
    lesson: "Modeling Space and Time",
    question: "In a traffic model, what is an Eulerian example?",
    answer: "Measuring the number or density of cars at a fixed position on the road.",
    tags: ["traffic", "Eulerian"]
  },
  {
    id: "m1-space-time-009",
    module: "Module 1",
    lesson: "Modeling Space and Time",
    question: "In a traffic model, what is a Lagrangian example?",
    answer: "Tracking the position of individual cars over time.",
    tags: ["traffic", "Lagrangian"]
  },
  {
    id: "m1-space-time-010",
    module: "Module 1",
    lesson: "Modeling Space and Time",
    question: "When physical distance is not the important relation between system components, what representation can be used?",
    answer: "A graph or complex network in which links represent interactions.",
    tags: ["graphs", "complex networks"]
  },
  {
    id: "m1-space-time-011",
    module: "Module 1",
    lesson: "Modeling Space and Time",
    question: "What do nodes and edges represent in an interaction graph?",
    answer: "Nodes represent components or agents, and edges represent relationships or interactions between them.",
    tags: ["graphs", "networks"]
  },
  {
    id: "m1-space-time-012",
    module: "Module 1",
    lesson: "Modeling Space and Time",
    question: "Why can network topology matter in a model?",
    answer: "Because the structure of the links can influence the dynamics occurring on the network.",
    tags: ["graphs", "topology", "dynamics"]
  }
];
