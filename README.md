# FPL Projections

A modern Fantasy Premier League dashboard inspired by FPL Insights, built as a static GitHub Pages app.

Features:
- Dark mode interface
- Player database with filtering and search
- Team builder with local storage persistence
- Fixture difficulty matrix
- xP prediction model
- Mobile-first layout
- Daily automated FPL data refresh via GitHub Actions

## Local development

Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages deployment

This repository includes a GitHub Actions workflow in `.github/workflows/pages.yml` that:
- runs the daily update script,
- refreshes the player dataset,
- deploys the site to GitHub Pages.

## Data refresh

The data refresh script runs daily and fetches the latest FPL bootstrap data from the official Fantasy Premier League API before updating the local dataset.
