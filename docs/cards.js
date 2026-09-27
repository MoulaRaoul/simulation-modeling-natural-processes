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
  }
];
