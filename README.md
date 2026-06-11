# parke.dev Monorepo

This repository is organized as a Bun workspace monorepo for multiple websites.

## Apps

| App | Path | Description |
| --- | --- | --- |
| `@parke/blog` | `apps/blog` | Existing Astro blog at `https://blog.parke.dev` |

## Project Structure

```text
apps/
  blog/
    astro.config.mjs
    public/
    src/
    package.json
package.json
bun.lock
```

Each website owns its own framework config, source files, public assets, and package scripts. The root `package.json` only defines the workspace and convenience scripts.

## Commands

Run commands from the repository root:

| Command | Action |
| --- | --- |
| `bun install` | Install dependencies for all workspaces |
| `bun run dev` | Start the blog dev server |
| `bun run build` | Build the blog |
| `bun run preview` | Preview the blog build |
| `bun run dev:blog` | Start only `apps/blog` |
| `bun run build:blog` | Build only `apps/blog` |
| `bun run preview:blog` | Preview only `apps/blog` |

You can also run commands directly inside a workspace:

```sh
bun run --cwd apps/blog dev
bun run --cwd apps/blog build
```

## Adding Another Website

1. Create a new folder under `apps/`, for example `apps/docs`.
2. Add that site's own `package.json`, source files, and framework config.
3. Add root convenience scripts if desired, for example:

   ```json
   {
     "scripts": {
       "dev:docs": "bun run --cwd apps/docs dev",
       "build:docs": "bun run --cwd apps/docs build"
     }
   }
   ```

Bun will automatically include any package that matches the root workspace pattern `apps/*`.

## Deployment

This repository is **publish-only**. Container images are built and pushed to GHCR by GitHub Actions.

Deployment and infrastructure are managed in the separate [`home-ops`](https://github.com/LukasParke/home-ops) repository.

### Publishing

The GitHub Actions workflow (`.github/workflows/docker-publish.yml`) builds the blog on every push to `main` and pushes two tags to GHCR:

- `ghcr.io/lukasparke/parke.dev:latest`
- `ghcr.io/lukasparke/parke.dev:run-N` (immutable build number)

The `run-N` tags are used by the home-ops cluster for deterministic rollouts and auto-updates.

### Adding a new website

1. Create a new app folder under `apps/`, e.g. `apps/docs`.
2. Add its own `package.json`, source files, and framework config.
3. Add root convenience scripts in `package.json`:
   ```json
   {
     "scripts": {
       "dev:docs": "bun run --cwd apps/docs dev",
       "build:docs": "bun run --cwd apps/docs build"
     }
   }
   ```
4. Add a build job in `.github/workflows/docker-publish.yml` to build and push the new app's image with its own `run-N` tags.
5. Add the deployment manifests in the `home-ops` repository under `kubernetes/apps/projects/<name>/`.
