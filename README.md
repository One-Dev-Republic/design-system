# Design System (One Dev Republic)

![One Dev Republic - Łukasz Migut](./storybook/public/one-dev-republic-logo.png)

Design system library for my projects, built with web components (Lit.js), documented and tested with Storybook.

## ✨ Overview

This is a personal design system focused on building reusable, framework-agnostic web components using Lit.js. The goal is to create a scalable component library that follows the Atomic Design methodology — starting with atoms and building up to molecules, organisms, and templates.

The project is in early development. I am starting with core foundations and will progressively build upon them.

## 📦 Tech Stack

- **Typescript**
- **Lit.js** - web components
- **Rollup.js** - module bundler
- **Storybook** - component documentation and e2e testing
- **Chromatic** - Cloud for Storybook
- **ESLint** - code linting
- **Prettier** - code formatting
- **pnpm** — package manager with workspaces (monorepo)

## 🗂️ Folder Structure

```markdown
/design-system
/packages
/ui-components
/storybook
```

## 🚀 Getting Started

### Prerequisites

```markdown
Node.js >= 18
pnpm
```

### Installation

```bash
git clone https://github.com/lmigut/design-system.git
cd design-system
pnpm install
```

## 📋 Roadmap

1. [x] Add branding for Storybook
2. [x] Deploy Storybook to Chromatic and make it public
3. [x] Add Github Actions to publish and build Storybook on every master push
4. [ ] Add Husky for running linters, code formatters, and tests before push
5. [ ] Add commit validator for meaningful commits
6. [ ] Add Private domain to public ODR Storybook
7. [ ] Add Vitest test runner and Lit.js assertion library for unit and component tests
8. [ ] Add design tokens (CSS custom properties)
9. [ ] Create and publish npm library based on ui-components
10. [ ] Implement theme system based on design tokens
11. [ ] Create folder structure in Storybook based on Atomic Design
12. [ ] Create Dark and Light mode in Storybook and components
13. [ ] Add shared library for global TypeScript, ESLint, and Prettier config
14. [ ] Add MIT License
15. [ ] Add Agent.md file with rules
16. [ ] Add Change log

## 📌 Status

In Progress (Beta) — foundations are being built. Expect frequent changes.

## 👤 Author

Łukasz Migut — <lmigut@onedevrepublic.com>

## 📄 License

MIT — TODO (license file will be added soon)
