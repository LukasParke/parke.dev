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

## Deploy (Coolify / Docker)

Point Coolify at this repo with the included `Dockerfile`, or:

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
