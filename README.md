# Birthday Card Template

A charming animated birthday card built with HTML, CSS, and JavaScript. This template creates an interactive mini app with a welcome screen, a book-opening animation, and a final birthday wish page.

## Features

- Elegant birthday greeting layout with animated background
- Interactive book reveal animation
- Floating hearts and twinkling light effects
- Simple replay flow to restart the experience
- Responsive design for desktop and mobile browsers

## Files

- `index.html` — page structure and content
- `styles.css` — visual design, animations, and layout
- `script.js` — scene transitions, interactivity, and decorative particle generation

## Getting Started

### Prerequisites

A modern web browser is all you need. No build tools or dependencies are required.

### Run locally

1. Open the project folder in your editor.
2. Open `index.html` in a browser.

Alternatively, use a local server for best results:

- In Visual Studio Code, install and use the Live Server extension
- From a terminal:
  - `python -m http.server 8000` (Python 3)
  - Open `http://localhost:8000`

## How to Use

1. Open the project in a browser.
2. Click **Open birthday book** to reveal the animated card.
3. Click **Turn page** to view the birthday wish.
4. Click **Play again** to reset the experience.

## Customization

### Change text

Edit the copy in `index.html` to personalize the greeting and wish message. Update headings, paragraphs, and labels with the recipient's name or your own message.

### Change styles

Modify `styles.css` to adjust colors, typography, spacing, or animation values. Key areas include:

- color variables in `:root`
- card layout and background styling
- button appearance and hover interactions
- decorative animations for hearts, twinkles, confetti, and ribbons

### Change behavior

Adjust the scene flow in `script.js`:

- `openBook()` controls the book opening sequence
- `showWish()` advances to the wish page
- `replay()` resets the app
- `createHeart()` and `createTwinkle()` build the animated background effects

## Deployment

This is a static web project and can be hosted anywhere static files are supported.

Suggested hosting options:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## Notes

- The template is designed for lightweight sharing and simple personalization.
- For advanced use, add more pages, sound effects, or form-based personal messages.

## License

This project is available for personal use and modification.