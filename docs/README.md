# Flashcards App

Static study application for the repository.

## Open locally

Open `index.html` directly in a modern browser.

## Publish with GitHub Pages

The app is intentionally stored in the repository's `docs/` folder so the repository can later be configured to publish GitHub Pages from:

- Branch: `main`
- Folder: `/docs`

## Adding cards

Cards live in `cards.js`.

Each card has a stable `id`, a `module`, a `lesson`, a `question`, an `answer`, and optional `tags`.

Learning status is stored locally in the browser with `localStorage`, so adding new cards does not erase progress on existing cards as long as their IDs remain unchanged.
