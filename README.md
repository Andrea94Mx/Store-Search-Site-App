# Prieto Club App

A minimal frontend web app for browsing Prieto Club merchandise, featuring a searchable card-based product display with a bold typographic background.

## Project Structure

```
/
├── Index.html    # Main HTML entry point
├── style.css     # Stylesheet (linked externally)
└── script.js     # JavaScript logic (loaded deferred)
```

## Features

- **Search bar** — filters product cards in real time via a `data-search` attribute
- **Product cards** — rendered dynamically from an HTML `<template>` element, each card displaying:
  - Product title (`data-title`)
  - Brand name (`data-brand`)
  - Short description (`data-description`)
- **Decorative background text** — large stylized "Prie" + "eto." typography for branding atmosphere

## How It Works

The app uses a native HTML `<template>` tag (`info-card`) as a blueprint for product cards. JavaScript (`script.js`) is expected to:

1. Read product data
2. Clone the template for each item
3. Populate the `data-title`, `data-brand`, and `data-description` fields
4. Append each card into the `info-card-container` div

The search input (`data-search`) filters the visible cards based on user input.

## Setup

No build tools or dependencies required. Just open `Index.html` in a browser:

```bash
open Index.html
# or
python3 -m http.server
```

Then visit `http://localhost:8000` in your browser.

## Customization

- **Add products** — update the data source in `script.js` with new product objects
- **Styling** — edit `style.css` to adjust card layout, colors, and the background typography
- **Search logic** — the search behavior lives in `script.js` tied to the `[data-search]` input

## Tech Stack

- Plain HTML5, CSS3, JavaScript (no frameworks)
- Mobile-responsive via viewport meta tag
