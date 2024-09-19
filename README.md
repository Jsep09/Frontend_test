# Frontend Code Test

This project is a frontend code test utilizing React, Vite, TypeScript, and other related technologies. It includes a mock API server setup with `json-server` and configurations for building and linting the code.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/) (depending on your preference)

### Installation

npm install

# or

yarn install

### Available Scripts

In the project directory, you can run:

npm run dev: Starts the Vite development server.
npm run build: Builds the project using TypeScript and Vite.
npm run lint: Runs ESLint to check for linting errors.
npm run preview: Previews the production build locally.
npm run server: Starts a JSON server to serve db.json on port 8000.

### Project Structure

src/: Contains the source code for the frontend application.
db.json: The file used by json-server for mock API data.

### Dependencies

The project uses a variety of dependencies including:

React: Library for building user interfaces.
Material-UI: Component library for React that implements Google’s Material Design.
Emotion: CSS-in-JS library for styling React components.
JSON Server: Package for setting up a fake REST API with minimal setup.

"dependencies": {
"@emotion/react": "^11.13.3",
"@emotion/styled": "^11.13.0",
"@fontsource/roboto": "^5.1.0",
"@mui/icons-material": "^6.1.0",
"@mui/material": "^6.1.0",
"@mui/styled-engine-sc": "^6.1.0",
"@types/bcryptjs": "^2.4.6",
"bcryptjs": "^2.4.3",
"json-server": "^1.0.0-beta.2",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-router-dom": "^6.26.2",
"styled-components": "^6.1.13"
},
