# RagingHD Website

The official website for **RagingHD LLC**, an independent software studio building practical software products and exploring custom software development services.

This repository contains the company's landing page, built with React, TypeScript, and Vite.

The current application is an initial development scaffold. The full landing page will be implemented incrementally.

## Tech Stack

- **React** — User interface
- **TypeScript** — Type safety
- **Vite** — Development server and production builds
- **Tailwind CSS v4** — Styling
- **shadcn/ui (Base UI)** — Reusable UI components
- **Lucide React** — Icons
- **ESLint** — Code quality
- **Vitest** — Unit and component testing
- **React Testing Library** — React component testing

**Deployment:** Vercel (planned)

## Requirements

Before setting up the project, install:

- Node.js 22.12+ (Node.js 24 LTS recommended)
- npm (included with Node.js)
- Git
- Bash (included with macOS and Git Bash on Windows)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/elukner/raginghd-website.git
cd raginghd-website
```

### 2. Set up the development environment

Run the setup script from the project root:

```bash
bash scripts/setup.sh
```

The script:

1. Installs project dependencies using `npm ci`.
2. Uses `package-lock.json` to install the locked dependency versions.
3. Displays a confirmation when setup completes.

The script is designed to work on macOS and Windows using Git Bash.

Node.js and npm must already be installed.

### 3. Start the development server

```bash
npm run dev
```

Open the URL displayed by Vite, typically:

http://localhost:5173

Vite automatically reloads the page as source files change.

## Development Commands

| Command | Description |
|---|---|
| `bash scripts/setup.sh` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm test` | Run Vitest in watch mode |
| `npm run test:run` | Run tests once |
| `npm run build` | Run TypeScript validation and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run linting, tests, and production build |

### Run all quality checks

Before committing major changes or deploying:

```bash
npm run check
```

This command runs:

```bash
npm run lint
npm run test:run
npm run build
```

All three commands must succeed.

## Testing

The project uses **Vitest** and **React Testing Library** for automated testing.

Tests are located alongside the components they test.

For example:

```text
src/
├── App.tsx
├── App.test.tsx
└── test/
    └── setup.ts
```

The initial tests verify that:

- The application renders the RagingHD company name.
- The company logo image references the expected SVG asset.

Run tests once:

```bash
npm run test:run
```

Or start Vitest in watch mode:

```bash
npm test
```

Additional component tests will be added as the website develops.

## Project Structure

```text
raginghd-website/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── raginghd-logo.svg
│
├── scripts/
│   └── setup.sh
│
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── test/
│   │   └── setup.ts
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

### Directory conventions

- `public/` — Static assets, including the RagingHD logo and icons.
- `src/components/` — Reusable React components.
- `src/components/ui/` — shadcn/ui components.
- `src/lib/` — Shared utilities and helpers.
- `src/test/` — Shared test configuration.
- `scripts/` — Development environment setup scripts.

Additional directories will be introduced when needed.

## shadcn/ui

The project uses shadcn/ui with Base UI and Tailwind CSS v4.

The initial setup includes:

- `components.json` for shadcn configuration.
- `src/lib/utils.ts` containing the `cn()` utility.
- `src/components/ui/button.tsx` containing the Button component.
- The `@/` TypeScript import alias.

To add additional components:

```bash
npx shadcn@latest add <component-name>
```

For example:

```bash
npx shadcn@latest add card
```

Components are added directly to the source code, allowing full customization.

The project has already been initialized. Do not run `shadcn init` again.

## Architecture

RagingHD V1 is a static React single-page application.

- No backend or database is required.
- No client-side router is needed.
- Project information will be stored in typed TypeScript data.
- Contact will initially use a business email link.
- Components will be reusable without introducing unnecessary abstractions.

Planned additions include:

```text
src/
├── components/
│   └── ProjectCard.tsx
└── data/
    └── projects.ts
```

These files will be created when implementing the Projects section.

## Deployment

The website is planned for deployment on Vercel.

Expected deployment configuration:

- **Framework:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Deployment source:** GitHub repository

Production deployment and custom domain configuration will be completed in Ticket #6.

## Development Workflow

Development follows small, incremental tickets.

Each feature should:

1. Be implemented in the appropriate component or module.
2. Include relevant tests where practical.
3. Pass `npm run check`.
4. Be committed to Git.
5. Be pushed to GitHub.

Use descriptive commit messages, for example:

```bash
git commit -m "feat: build landing page hero"
```

Avoid committing environment files, credentials, `node_modules/`, or generated build output.

The `package-lock.json` file should remain committed to ensure reproducible dependency installation.

