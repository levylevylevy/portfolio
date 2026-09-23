# Portfolio

Personal portfolio site built with [Create React App](https://create-react-app.dev/) and Tailwind CSS.

- **Live site:** https://levylevylevy.github.io/portfolio/ (hosted on **GitHub Pages**)
- **Spotify "Now Playing" API:** the serverless function at `api/now-playing.js` is hosted on **Vercel** and called by the frontend

---

## Prerequisites

- [Node.js](https://nodejs.org/) 16+ and npm
- (Optional) [Vercel CLI](https://vercel.com/docs/cli) for testing serverless functions locally and manual deploys:
  ```zsh
  npm i -g vercel
  ```

---

## Running locally

From the project root (`portfolio/`):

```zsh
# 1. Install dependencies (first time, or after pulling new deps)
npm install

# 2. Start the dev server
npm start
```

The site will open at http://localhost:3000 with hot reload.

### Running with the `/api` serverless routes

`npm start` only runs the React dev server — it does **not** run `api/now-playing.js`. To test the API locally alongside the frontend, use the Vercel CLI:

```zsh
vercel dev
```

This serves the React app and the `/api/*` routes together (default: http://localhost:3000).

### Other useful scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the dev server |
| `npm run build` | Build a production bundle into `build/` |
| `npm test` | Run tests in watch mode |
| `npm run deploy` | Build and publish `build/` to GitHub Pages |

---

## Pushing changes & deploying

The frontend is deployed to **GitHub Pages** using the `gh-pages` package. Pushing to `main` does **not** auto-deploy the site — you have to run the deploy script.

### 1. Commit and push your source changes

```zsh
git status
git add -A
git commit -m "describe your change"
git push origin main
```

This updates the repo but does **not** update the live site yet.

### 2. Deploy the site to GitHub Pages

```zsh
npm run deploy
```

Under the hood this runs `npm run build` and then pushes the `build/` folder to the `gh-pages` branch, which GitHub Pages serves at https://levylevylevy.github.io/portfolio/. Give it ~1 minute to go live.

### Deploying the Spotify API (Vercel)

The `/api/now-playing` function lives on Vercel and is connected to this repo. It auto-redeploys when you push to `main`, so if you only changed frontend code you don't need to do anything Vercel-side. To deploy manually:

```zsh
vercel           # preview
vercel --prod    # production
```

### Tip: verify the build before deploying

```zsh
npm run build
```

Catches build errors locally before `npm run deploy` does.

---

## Environment variables

The Spotify "Now Playing" API function (`api/now-playing.js`) expects Spotify credentials as environment variables. Set these in the [Vercel dashboard](https://vercel.com/dashboard) under **Project → Settings → Environment Variables**, and mirror them in a local `.env` file (do **not** commit it) if using `vercel dev`.

---

## Project structure

```
api/             Vercel serverless functions
public/          Static assets served as-is
src/             React app source
  images/        Image assets
  videos/        Video assets
  projectpages/  Individual project pages
build/           Production build output (generated)
vercel.json      Vercel deploy config
```
