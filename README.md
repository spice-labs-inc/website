# Spice Labs Website

Public website for Spice Labs: https://www.spicelabs.io

Built with Astro.

## Deployment

- **Production**: `main` branch deploys to www.spicelabs.io via GitHub Pages (`gh-pages` branch)

## Development

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm format`          | Format your code with Prettier                   |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Content editing (Sveltia CMS)

The admin UI lives at `public/admin/` (Sveltia CMS, loaded from unpkg). `/admin`
redirects to `/admin/index.html`; on the deployed site both URLs serve the admin.

### Locally (no auth, no remote changes)

Sveltia CMS has a local development workflow that edits your working tree
directly, so you can test content changes without touching GitHub:

1. Run `pnpm dev` and open `http://localhost:4321/admin/index.html` in a
   Chromium-based browser (Chrome, Edge, Brave; Safari is not supported).
2. Click **Work with Local Repository** and select this project's root folder.
3. Edit content as usual — changes are written to local files. Preview at
   `http://localhost:4321/`.
4. Review the diff and commit/push with git as normal. Optionally enable
   **Settings → Developer → Commit Changes to Git** to have the CMS commit each
   save itself (requires `user.name`/`user.email` set in `.git/config`).

The GitHub backend config stays in place for production editing (sign in with
GitHub OAuth); the local workflow never contacts it.

### Version pins

- Sveltia CMS is pinned via unpkg in `public/admin/index.html`.
- When upgrading it, re-validate `public/admin/config.yml` against the bundled
  schema (`https://unpkg.com/@sveltia/cms@<version>/schema/sveltia-cms.json`);
  newer versions refuse to load on invalid config.

## Resources

- [Astro Documentation](https://docs.astro.build)
