# parke.dev

Personal portfolio for Luke Parke. SvelteKit 2 + Svelte 5 + Skeleton v4 + Tailwind v4, themed with the custom **parke** theme ("Server Room at Night" — see `src/lib/theme/parke.css`).

## Develop

```sh
npm install
npm run dev
```

## Build & run (Node)

```sh
npm run build
node build
```

## Deploy (GitOps)

CI builds the included `Dockerfile` on every push to main and publishes
`ghcr.io/lukasparke/parke.dev-portfolio:run-N`; Flux image automation in
[home-ops](https://github.com/LukasParke/home-ops) picks up the new tag and
rolls it out to the cluster at https://parke.dev. To run it locally:

```sh
docker build -t parke-dev .
docker run -p 3000:3000 parke-dev
```

## Where things live

- `src/lib/theme/parke.css` — the Skeleton theme (brand colors, fonts, shape)
- `src/lib/data/profile.ts` — your bio, links, stack, and the projects grid data
- `src/lib/components/` — RackLogo, Prompt (terminal motif), ProjectCard
- `src/app.css` — fonts, dark-mode lock, LED/glow brand utilities

To add a project, append to `projects` in `profile.ts` — status `online` (green LED), `building` (gold), or `archived` (red).
