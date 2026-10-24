# KnowledgeVerse — Bilingual Learning Platform

A responsive Bangla/English educational website built with HTML, CSS, and vanilla JavaScript. No backend or database is required.

## Features
- Searchable learning content
- Learning dashboard and vocabulary library
- Quizzes and daily learning content
- Bookmarks and learning history saved in browser localStorage
- Light/dark theme and responsive layout

## Run locally
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal.

## Build for deployment
Run `npm run build`. Vite creates the production site in the `dist/` folder.

## Deploy
- **Netlify:** Import the Git repository; build command `npm run build`, publish directory `dist`.
- **Vercel:** Import the Git repository; framework preset Vite, build command `npm run build`, output directory `dist`.
- **GitHub Pages:** You can deploy the static `index.html`, CSS, and JS directly, or configure Vite's `base` setting if deploying under a repository subpath.

## Portfolio note
Add a project card with a live demo URL and this repository URL. Mention the technologies and features you implemented. User bookmarks/history are stored locally in each browser, not in a shared account.
