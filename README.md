# KnowledgeVerse — GitHub Pages ready

This folder contains the complete KnowledgeVerse website, including the 103-word vocabulary library.

## Important GitHub Pages fix

The JavaScript files (`data.js`, `script.js`, and `vocabulary.js`) are also copied into `public/`. Vite copies these files into the built `dist/` folder, so the classic script tags in `index.html` can load them on GitHub Pages.

## Replace your GitHub repository files

1. Download and extract this ZIP.
2. Open the `knowledgeverse` folder inside it.
3. Upload/replace the contents of that folder in your existing `knowledgeverse` GitHub repository. Keep the `.github/workflows/deploy.yml` file in your repository if it already exists.
4. Make sure the repository's GitHub Pages deployment workflow runs `npm install` (or `npm ci` if a lock file exists), then `npm run build`, and publishes the `dist` folder.
5. Wait for the GitHub Actions workflow to finish, then refresh the live website with Ctrl+F5.

Do not upload the outer ZIP itself to the repository. Upload the files and folders inside the `knowledgeverse` folder.

## Run locally

Install Node.js LTS, then in this folder run:

```bash
npm install
npm run dev
```

Build test:

```bash
npm run build
```

Expected build output: `dist/`. It should include `index.html`, `data.js`, `script.js`, `vocabulary.js`, and the CSS assets.
