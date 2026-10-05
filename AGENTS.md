# AGENTS.md

## Project

This repository is an Astro 7 application with React islands, Tailwind CSS 4, and the Cloudflare adapter for server rendering. Contact form submissions use Astro server actions and a Cloudflare D1 database.

## Repository layout

- `src/pages/`: Astro routes and API routes.
- `src/components/`: React and Astro-facing UI components.
- `src/actions/`: Astro server actions.
- `src/lib/`: Shared validation and domain helpers.
- `src/layouts/`: Shared Astro layouts.
- `migrations/`: D1 SQL migrations.
- `public/`: Static assets.
- `astro.config.mjs`: Astro, React, Tailwind Vite, and Cloudflare configuration.
- `wrangler.jsonc`: Cloudflare Worker, assets, D1, and observability configuration.

## Commands

Use pnpm for all package operations:

- `pnpm dev`: Generate Wrangler types and start the Astro dev server.
- `pnpm start`: Start the Astro dev server without regenerating Wrangler types.
- `pnpm build`: Run `astro check` and build the Cloudflare Worker.
- `pnpm lint`: Run ESLint.
- `pnpm audit`: Check dependency vulnerabilities.
- `pnpm deploy`: Build and deploy with Wrangler.

Run `pnpm build` after changes to routes, actions, configuration, dependencies, or TypeScript types. Run `pnpm audit` after dependency changes.

## Development guidelines

- Keep changes focused and preserve existing public APIs and visual patterns.
- Use Astro for page structure and server rendering; use React only for interactive islands.
- Keep server-only logic in Astro actions or server routes. Do not expose D1 bindings or secrets to client code.
- Validate external and form input at the boundary with Zod 4 schemas. Prefer inferred types over duplicated manual types.
- Use parameterized D1 statements and explicit null handling for optional form fields.
- Use Tailwind 4 through `@tailwindcss/vite`; do not restore the removed `@astrojs/tailwind` or PostCSS setup.
- Keep Cloudflare bindings and generated Worker types aligned with `wrangler.jsonc`.
- Prefer existing components and utilities over introducing new abstractions.
- Do not edit generated directories such as `.astro/`, `dist/`, or `.wrangler/`.
- Do not commit secrets, database credentials, generated output, or dependency cache files.

## Dependency changes

- Use `pnpm add`, `pnpm remove`, or `pnpm install` so `pnpm-lock.yaml` stays synchronized.
- Prefer patched versions that are compatible with the current Astro and Cloudflare stack.
- After upgrades, run `pnpm install`, `pnpm build`, and `pnpm audit`.
- Avoid major upgrades unrelated to the task unless the current dependency blocks a security or compatibility fix.
