FROM docker.io/oven/bun:1.3.13 AS build
WORKDIR /app
COPY package.json bun.lock ./
COPY apps/blog/package.json apps/blog/package.json
COPY apps/portfolio/package.json apps/portfolio/package.json
RUN bun install --frozen-lockfile
COPY apps/portfolio apps/portfolio
RUN bun run --cwd apps/portfolio build

FROM docker.io/nginxinc/nginx-unprivileged:1.29-alpine
COPY --from=build /app/apps/portfolio/dist /usr/share/nginx/html
EXPOSE 8080
