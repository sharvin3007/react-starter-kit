# ![ReactLogo](./src/assets/react.svg) React Starter Kit with TypeScript, Vite, ESLint, Prettier, Husky, Storybook ![ViteLogo](./src/assets/vite.svg)

This project is a React starter kit, designed to streamline the development process by integrating modern tools and best practices. It includes Vite for fast builds, TypeScript for type safety, ESLint and Prettier for code quality and formatting, Husky for pre-commit hooks, and Storybook with Chromatic for component development and visual testing.
Currently, two official plugins are available:

## Features

- **React**: Fast and modern front-end library.
- **TypeScript**: Static type checking for improved code quality.
- **Vite**: Lightning-fast development environment.
- **ESLint**: Linting and code quality checks.
- **Prettier**: Code formatting.
- **Husky**: Git hooks for linting and formatting.
- **Storybook**: Component development and testing.
- **Chromatic**: Automated visual testing and Storybook publishing.
- **Vercel**: App is deployed to Vercel using free tier.

## Development Getting Started

To begin developing locally, follow the instructions below to clone the repository, install dependencies, and start the local development server.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository from [GitHub](https://github.com/sharvin3007/react-starter-kit.git)

   ```bash
   git clone <repo-url>
   ```

2. Navigate to the cloned repository and install dependencies

   ```bash
   cd react-starter-kit
   yarn install
   ```

3. Start the development server

   ```bash
    yarn dev
   ```

4. Open the app

   Visit http://localhost:5173 in your browser to see the result.

### Storybook

1. Start the Storybook server

   ```bash
    yarn storybook
   ```

2. Open the Storybook

   Visit http://localhost:6006 in your browser to see the Storybook.

3. Chromatic Deployment

   The Storybook is integrated with Chromatic for visual regression testing and publishing your Storybook.

   ```bash
    yarn chromatic
   ```

### Visual and Interactive Component Testing with Chromatic

Chromatic is integrated into this project for automated visual regression testing, ensuring UI components look and behave correctly across changes. It captures visual snapshots of your Storybook components and highlights any unintended changes.

- **Visual Regression Testing**: Automatically detects UI changes by comparing the current state of your components with previous snapshots.
- **Interactive Testing**: Allows you to interact with components and simulate various states.
- **CI/CD Integration**: Chromatic can be integrated into your CI pipeline to automate testing and approval workflows. **[TODO]**

### Chromatic

- [Chromatic Setup](https://www.chromatic.com/setup?appId=66f4498c0319c36be6175c16)
- [Published Storybook](https://66f4498c0319c36be6175c16-vnwyzyukhp.chromatic.com/)

## Deploy on Vercel

The starter kit is deployed using Vercel free hosting which provides seamless integration with Vite. The deployment documentation is available **[here](https://react-starter-kit-peach.vercel.app/)**.

### Lint

`yarn lint` checks for linter errors and `yarn lint:fix` will automatically fix them.

### Format checking

`yarn prettier` uses Prettier to format code. `yarn prettier:fix` will automatically format code.

### Type Checking

`yarn typecheck` runs the TypeScript compiler to check for type errors without emitting any output files. It ensures that your code adheres to TypeScript's type-checking rules.

### Husky pre-commit hook and lint-staged

`yarn prepare` will install husky and pre-commit hooks and `yarn lint-staged` will run the linter on staged files.

## License

This project is licensed under the MIT License.
