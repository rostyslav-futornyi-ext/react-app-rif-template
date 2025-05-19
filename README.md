<p align="middle">
  <img src="https://www.rifos.org/assets/img/logo.svg" alt="logo" height="100" >
</p>
<h3 align="middle"><code>react-app-rif-template</code></h3>
<p align="middle">
  Modern React template with Vite, TypeScript, SCSS Modules, Radix UI, Vitest, and more
</p>
<p align="middle">
  <a href="https://github.com/rsksmart/react-app-rif-template/actions/workflows/ci.yml">
    <img src="https://github.com/rsksmart/react-app-rif-template/actions/workflows/ci.yml/badge.svg" alt="CI Status" />
  </a>
</p>

<div align="center">
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="SASS" />
  <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" />
</div>

## 🚀 Features

This template provides a robust foundation for modern React applications with:

- ⚡️ **[Vite](https://vitejs.dev/)** - Lightning fast build tool
- 🔷 **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- 🎨 **[SCSS Modules](https://sass-lang.com/)** - Component-scoped styles
- 🧩 **BEM methodology** - Consistent CSS architecture
- 🧰 **[Radix UI](https://www.radix-ui.com/)** - Accessible headless UI components
- ✅ **[Vitest](https://vitest.dev/)** - Modern testing framework
- 🔍 **[ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)** - Code quality
- 🐶 **[Husky](https://typicode.github.io/husky/)** - Git hooks for code quality
- 📂 **Feature-oriented folder structure** - Organized scalable architecture
- 🔄 **GitHub Actions** - CI/CD workflows

## 📋 Project Structure

This template follows a feature-oriented architecture, organizing code by domain features rather than technical types.

```
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Shared components
│   ├── ui/         # Low-level UI components
│   └── shared/     # Higher-level shared components
├── config/         # App configuration
├── features/       # Feature-based modules
│   └── auth/       # Example feature
│       ├── api/        # API integrations
│       ├── components/ # Feature-specific components
│       ├── hooks/      # Feature-specific hooks
│       ├── types/      # Type definitions
│       └── index.ts    # Feature entry point
├── hooks/          # Shared hooks
├── lib/            # Third-party library wrappers
├── styles/         # Global styles
│   ├── _variables.scss  # Design tokens
│   ├── _base.scss       # Base element styles
│   ├── _reset.scss      # CSS reset
│   ├── _utils.scss      # Utility classes
│   └── index.scss       # Main style entry
├── types/          # Global type definitions
├── utils/          # Utility functions
├── App.tsx         # Main App component
├── main.tsx        # Application entry point
└── vite-env.d.ts   # Vite type definitions
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

```bash
# Clone the repository using this template
git clone https://github.com/your-username/your-project.git
cd your-project

# Install dependencies
yarn install
```

## 📝 Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `dist` folder.

### `yarn preview`

Locally preview the production build.

### `yarn test`

Runs the test suite.

### `yarn test:watch`

Runs tests in watch mode for development.

### `yarn test:coverage`

Run tests and generate coverage reports.

### `yarn lint`

Checks code for linting errors.

### `yarn lint:fix`

Automatically fixes linting errors when possible.

### `yarn format`

Formats code with Prettier.

## 📏 Code Quality

This template enforces high code quality standards with:

- ESLint for code linting
- Prettier for consistent formatting
- TypeScript for type safety
- Husky for pre-commit hooks
- Test coverage thresholds to maintain test quality:
  ```json
  "thresholds": {
    "global": {
      "statements": 80,
      "branches": 80,
      "lines": 80,
      "functions": 80
    }
  }
  ```

### Git Hooks

This project uses Husky to run pre-commit hooks that enforce code quality, with an enhanced visual experience:

- **pre-commit**: Runs lint-staged and TypeScript checks with color-coded feedback

The pre-commit hook ensures:
- No ESLint errors in your code
- TypeScript type checking passes 
- Proper code formatting with Prettier

The pre-commit process includes:
- 🎨 Color-coded output for better visibility
- 📊 Clear success/failure indicators
- 🚀 Boxed formatting for important messages
- 🔄 Compatible with the latest Husky version

This prevents committing code with errors or incorrect types while providing a visually pleasing developer experience.

## 🧩 BEM Methodology

This template uses the BEM (Block, Element, Modifier) methodology for CSS naming conventions:

- **Block**: Standalone entity that is meaningful on its own (e.g., `.card`)
- **Element**: Parts of a block that have no standalone meaning (e.g., `.card__title`)
- **Modifier**: Flags on blocks or elements for changing appearance (e.g., `.card--featured`)

The included SCSS utils provide helpful mixins for working with BEM.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgements

- [RSK Infrastructure Framework (RIF)](https://www.rifos.org/)
- [Bulletproof React](https://github.com/alan2207/bulletproof-react) - for the project structure guidance
