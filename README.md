# Node.js, Express and TypeScript Starter Project

This is a starter project for Node.js, Express and TypeScript.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 22.10.0)
- [PNPM](https://pnpm.io) (>= 9.12.2)

### Installing

```bash
$ git clone https://github.com/mhm13dev/node-express-ts-starter.git --depth 1 <project-name>
$ cd <project-name>
$ rm -rf .git
$ git init
$ git add .
$ git commit -m "Initial commit"
$ pnpm install
```

### Running

```bash
Development:
$ pnpm start:dev

Production:
$ pnpm build
$ pnpm start
```

### Environment Variables

You can use multiple environment variables files for different environments.
Order of precedence is:

1. `.env.development.local`, `.env.production.local`, `.env.test.local` (local overrides for environment specific variables)
2. `.env.development`, `.env.production`, `.env.test` (environment specific variables)
3. `.env.local` (local overrides)
4. `.env` (default)

The default value of `NODE_ENV` for different scripts is:

- `start:dev`: `NODE_ENV=development`
- `build`: `NODE_ENV=production`
- `start`: `NODE_ENV=production`

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [PNPM](https://pnpm.io/) - Package manager
- [Express](https://expressjs.com/) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [ESLint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Code formatter

## Authors

- **[Mubashir Hassan](https://mhm13.dev/)**
