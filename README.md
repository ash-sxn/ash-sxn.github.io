# Ashutosh Saxena Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, Framer Motion, and Three.js.

## Overview

This portfolio website showcases my skills, projects, and experience as a DevOps Engineer. It features modern animations, responsive design, and a clean, professional appearance.

## Features

- Responsive design for all device sizes
- Modern animations and transitions using Framer Motion
- Interactive UI elements
- Project showcase with filtering
- Skills visualization
- Experience timeline
- Contact form
- Optimized for performance

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) / [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ash-sxn/ash-sxn.github.io.git
   cd ash-sxn.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
.
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── page.tsx      # Home page
│   │   └── layout.tsx    # Root layout
│   ├── components/       # React components
│   ├── styles/           # Global styles
│   └── utils/            # Utility functions
├── next.config.js        # Next.js configuration
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Deployment

This website is configured for static export and deployment to GitHub Pages.

To build and export the website:

```bash
npm run build
# or
yarn build
```

## Development Guidelines

See [how-we-code.mdc](./how-we-code.mdc) for code standards and development guidelines.

For project tasks and goals, refer to [todo.md](./todo.md).

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Design inspiration from:
  - [threejs-journey.com](https://threejs-journey.com/)
  - [sunnypatel.net](https://www.sunnypatel.net/)
  - [zachjordan.io](https://www.zachjordan.io/) 