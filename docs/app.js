const cards = Array.isArray(window.FLASHCARDS) ? window.FLASHCARDS : [];

const moduleFilter = document.querySelector("#moduleFilter");
const lessonFilter = document.querySelector("#lessonFilter");
const statusFilter = document.querySelector("#statusFilter");
const shuffleButton = document.querySelector("#shuffleButton");
const resetProgress = document.querySelector("#resetProgress");

const flashcard = document.querySelector("#flashcard");
const cardModule = document.querySelector("#cardModule");
const cardLesson = document.querySelector("#cardLesson");
const cardSide = document.querySelector("#cardSide");
const cardContent = document.querySelector("#cardContent");
const emptyState = document.querySelector("#emptyState");

const reviewButton = document.querySelector("#reviewButton");
const masteredButton = document.querySelector("#masteredButton");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");
const positionLabel = document.querySelector("#positionLabel");

const visibleCount = document.querySelector("#visibleCount");
const masteredCount = document.querySelector("#masteredCount");
const reviewCount = document.querySelector("#reviewCount");

const STORAGE_KEY = "simulation-modeling-flashcards-progress-v1";

let progress = loadProgress();
let visibleCards = [];
let currentIndex = 0;
let showingAnswer = false;

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function fillSelect(select, values, allLabel) {
  const previous = select.value;
  select.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = allLabel;
  select.appendChild(allOption);

  for (const value of values) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  }

  if ([...select.options].some(option => option.value === previous)) {
    select.value = previous;
  }
}

function initializeFilters() {
  fillSelect(moduleFilter, uniqueSorted(cards.map(card => card.module)), "Tous les modules");
  refreshLessonFilter();
}

function refreshLessonFilter() {
  const moduleValue = moduleFilter.value || "all";
  const lessons = cards
    .filter(card => moduleValue === "all" || card.module === moduleValue)
    .map(card => card.lesson);

  fillSelect(lessonFilter, uniqueSorted(lessons), "Toutes les leçons");
}

function cardStatus(card) {
  return progress[card.id] || "unseen";
}

function applyFilters({ keepCurrent = false } = {}) {
  const currentId = keepCurrent && visibleCards[currentIndex] ? visibleCards[currentIndex].id : null;
  const moduleValue = moduleFilter.value || "all";
  const lessonValue = lessonFilter.value || "all";
  const statusValue = statusFilter.value || "all";

  visibleCards = cards.filter(card => {
    const moduleMatch = moduleValue === "all" || card.module === moduleValue;
    const lessonMatch = lessonValue === "all" || card.lesson === lessonValue;
    const statusMatch = statusValue === "all" || cardStatus(card) === statusValue;
    return moduleMatch && lessonMatch && statusMatch;
  });

  if (currentId) {
    const foundIndex = visibleCards.findIndex(card => card.id === currentId);
    currentIndex = foundIndex >= 0 ? foundIndex : 0;
  } else {
    currentIndex = 0;
  }

  showingAnswer = false;
  render();
}

function render() {
  const hasCards = visibleCards.length > 0;

  flashcard.hidden = !hasCards;
  emptyState.hidden = hasCards;
  reviewButton.disabled = !hasCards;
  masteredButton.disabled = !hasCards;
  previousButton.disabled = !hasCards;
  nextButton.disabled = !hasCards;

  updateStats();

  if (!hasCards) {
    positionLabel.textContent = "0 / 0";
    return;
  }

  currentIndex = ((currentIndex % visibleCards.length) + visibleCards.length) % visibleCards.length;
  const card = visibleCards[currentIndex];
  const status = cardStatus(card);

  cardModule.textContent = card.module;
  cardLesson.textContent = card.lesson;
  cardSide.textContent = showingAnswer ? "Réponse" : "Question";
  cardContent.textContent = showingAnswer ? card.answer : card.question;
  positionLabel.textContent = `${currentIndex + 1} / ${visibleCards.length}`;

  flashcard.classList.toggle("answer-visible", showingAnswer);
  reviewButton.classList.toggle("active", status === "review");
  masteredButton.classList.toggle("active", status === "mastered");
}

function updateStats() {
  visibleCount.textContent = visibleCards.length;
  masteredCount.textContent = cards.filter(card => cardStatus(card) === "mastered").length;
  reviewCount.textContent = cards.filter(card => cardStatus(card) === "review").length;
}

function flip() {
  if (!visibleCards.length) return;
  showingAnswer = !showingAnswer;
  render();
}

function move(delta) {
  if (!visibleCards.length) return;
  currentIndex = (currentIndex + delta + visibleCards.length) % visibleCards.length;
  showingAnswer = false;
  render();
}

function rate(status) {
  if (!visibleCards.length) return;
  const card = visibleCards[currentIndex];
  progress[card.id] = status;
  saveProgress();

  if (statusFilter.value !== "all") {
    applyFilters();
  } else {
    updateStats();
    render();
    move(1);
  }
}

function shuffle() {
  for (let i = visibleCards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [visibleCards[i], visibleCards[j]] = [visibleCards[j], visibleCards[i]];
  }
  currentIndex = 0;
  showingAnswer = false;
  render();
}

flashcard.addEventListener("click", flip);
flashcard.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    flip();
  }
});

previousButton.addEventListener("click", () => move(-1));
nextButton.addEventListener("click", () => move(1));
reviewButton.addEventListener("click", () => rate("review"));
masteredButton.addEventListener("click", () => rate("mastered"));
shuffleButton.addEventListener("click", shuffle);

moduleFilter.addEventListener("change", () => {
  refreshLessonFilter();
  applyFilters();
});
lessonFilter.addEventListener("change", () => applyFilters());
statusFilter.addEventListener("change", () => applyFilters());

resetProgress.addEventListener("click", () => {
  const confirmed = window.confirm("Réinitialiser toute la progression des flashcards ?");
  if (!confirmed) return;
  progress = {};
  saveProgress();
  applyFilters();
});

document.addEventListener("keydown", event => {
  if (["SELECT", "BUTTON"].includes(document.activeElement.tagName)) return;

  if (event.code === "Space") {
    event.preventDefault();
    flip();
  } else if (event.key === "ArrowLeft") {
    move(-1);
  } else if (event.key === "ArrowRight") {
    move(1);
  } else if (event.key === "1") {
    rate("review");
  } else if (event.key === "2") {
    rate("mastered");
  }
});

initializeFilters();
applyFilters();
