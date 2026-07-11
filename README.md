# Design System (One Dev Republic)

![One Dev Republic - Łukasz Migut](./storybook/public/one-dev-republic-logo.png)

Design system library for my projects, built with web components (Lit.js), documented and tested with Storybook.

## ✨ Overview

This is a personal design system focused on building reusable, framework-agnostic web components using Lit.js. The goal is to create a scalable component library that follows the Atomic Design methodology — starting with atoms and building up to molecules, organisms, and templates.

The project is in early development. I am starting with core foundations and will progressively build upon them.

## 📦 Tech Stack

- **Typescript**
- **Lit.js** — web components
- **Rollup.js** — module bundler
- **Storybook** — component documentation and e2e testing (future)
- **ESLint** — linting
- **Prettier** — code formatting
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

1. [ ] Add Husky for running linters, code formatters, and tests before push
2. [ ] Add commit validator for meaningful commits
3. [ ] Add Vitest test runner and Lit.js assertion library for unit and component tests
4. [ ] Create folder structure in Storybook based on Atomic Design
5. [ ] Add branding for Storybook
6. [ ] Deploy Storybook to Chromatic and make it public
7. [ ] Create and publish npm library based on ui-components
8. [ ] Add design tokens (CSS custom properties)
9. [ ] Implement theme system based on design tokens
10. [ ] Create Dark and Light mode in Storybook and components
11. [ ] Add shared library for global TypeScript, ESLint, and Prettier config
12. [ ] Add MIT License
13. [ ] Add Agent.md file with rules
14. [ ] Add Change log

## 📌 Status

In Progress (Beta) — foundations are being built. Expect frequent changes.

## 👤 Author

Łukasz Migut — <lmigut@onedevrepublic.com>

## 📄 License

MIT — TODO (license file will be added soon)
