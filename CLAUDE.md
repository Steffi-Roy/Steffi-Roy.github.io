# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Site Overview

Personal portfolio site hosted on GitHub Pages at `steffir.com`. Pure static HTML/CSS/JS — no build system, no package manager, no test runner. Changes go live by committing and pushing to `main`.

## Architecture

- `index.html` — Main portfolio page. Modern redesign with inline CSS using CSS custom properties and a dark/light theme toggle (persisted via `localStorage`). No jQuery; uses vanilla JS only.
- `certifications.html` — Grid of certification cards with hover effects.
- `recommendations.html` — Animated resource links page. Uses CSS keyframe animations and respects `prefers-reduced-motion`.
- `publications.html` — Links out to Google Scholar profile.
- `contact-form-process.php` — Minimal PHP handler for the contact form; sends to `steffiroy@hotmail.com`.
- `assets/css/main.css` — Legacy styles from the HTML5 UP "Strata" template (still referenced by older pages but not by the redesigned `index.html`).
- `assets/sass/` — Sass source files from the original template; **not compiled** and not part of the active build.

## Theming

`index.html` uses CSS custom properties (`--bg`, `--text`, `--accent`, etc.) and a `data-theme` attribute on `<html>` for dark/light mode. The JS toggle reads/writes `localStorage` key `theme`. Other pages (`certifications.html`, `recommendations.html`) have their own independent inline styles and do not share a theme system with `index.html`.

## Deployment

Push to `main` → GitHub Pages auto-deploys. The custom domain is set via the `CNAME` file (`steffir.com`). No CI, no build step.
