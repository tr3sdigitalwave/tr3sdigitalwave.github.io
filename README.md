# Tr3sDigitalWave — Website

Minimalist, high-end single-page site for **Tr3sDigitalWave**, a digital-solutions business
(intelligent WhatsApp bots, process automation, dashboards, custom web development).

Pure static: HTML + CSS + vanilla JS. No build step, no dependencies, GitHub Pages ready.

## Structure

```
app/
├── index.html      # the whole site (semantic, accessible)
├── styles.css      # design system (OKLCH tokens, responsive)
├── src/i18n.js     # 6-language engine + dictionaries (en/es/zh/de/ca/fr)
├── src/main.js     # nav, scroll reveals, counters, multilingual demo bot
└── favicon.svg
```

## Languages

English, Español, 中文, Deutsch, Català and Français — switcher in the navigation.
The choice is remembered (localStorage) and the visitor's browser language is
auto-detected on first visit. The demo bot speaks all six languages too.
All translations live in `src/i18n.js`; English is the source of truth in `index.html`.

## Before you publish — replace these placeholders

1. **WhatsApp number** — already set to the business number (`593981681345`). If it ever
   changes, search `593981681345` in `index.html` and `src/main.js`,
   replace with the real business number (international format, no `+`).
2. **Email** — already set to `tr3sdigitalwave@proton.me`; search that address if you ever need to change it.

## Deploy to GitHub Pages (free)

```bash
# 1. create the repo on github.com (e.g. tr3sdigitalwave.github.io or any name)
# 2. from this folder:
git init
git add .
git commit -m "Launch Tr3sDigitalWave site"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `/root` → Save**.
The site goes live at `https://<your-user>.github.io/<your-repo>/` in a minute or two.

> Tip: if the repo is named `<your-user>.github.io`, the site lives at the root URL
> with no path suffix.

## Local preview

Any static server works, e.g.:

```bash
python -m http.server 8080
# open http://localhost:8080
```
