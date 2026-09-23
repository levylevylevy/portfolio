# Portfolio

Personal portfolio site built with [Create React App](https://create-react-app.dev/), Tailwind CSS, and deployed on [Vercel](https://vercel.com/). Includes a Vercel serverless function at `api/now-playing.js` that powers the "Now Playing" Spotify widget.

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

---

## Pushing changes & deploying

The project is connected to Vercel, which auto-deploys on push to the `main` branch (config in `vercel.json`).

### Standard workflow

```zsh
# See what's changed
git status

# Stage and commit
git add -A
git commit -m "describe your change"

# Push — this triggers a Vercel deploy
git push origin main
```

Watch the build progress at https://vercel.com/dashboard. Pushes to other branches create preview deployments.

### Tip: verify the build before pushing

```zsh
npm run build
```

Catches build errors locally before Vercel does.

### Manual deploy (without git)

```zsh
vercel           # deploy a preview URL
vercel --prod    # deploy to production
```

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
