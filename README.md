# Jobins Frontend Challenge

A modern React dashboard application built with React 19, TypeScript, Vite, and TanStack Router.

## Features

- **Dashboard Overview**: View sales statistics, profit charts, and global distribution data
- **Order Management**: Track and manage orders with filtering and pagination
- **User Profile**: Display user information and order statistics
- **Product Management**: Browse and manage product listings
- **Responsive Design**: Built with Tailwind CSS for a responsive UI

## Tech Stack

- **React 19**: Latest version of React with improved performance
- **TypeScript**: For type safety and better developer experience
- **Vite**: Fast build tool and development server
- **TanStack Router**: Type-safe routing for React applications
- **TanStack Query**: Data fetching and state management
- **Tailwind CSS**: Utility-first CSS framework
- **JSON Server**: Mock backend API for development

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- pnpm package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file based on `.env.sample`

### Development

Run the development server and JSON server concurrently:

```bash
pnpm dev
```

This will start:

- Vite dev server at http://localhost:5173
- JSON Server at http://localhost:3000

### Build

```bash
pnpm build
```

### Linting and Formatting

```bash
# Run ESLint
pnpm lint

# Format code with Prettier
pnpm format
```

## Project Structure

- `/src`: Source code
  - `/assets`: Static assets (images, fonts)
  - `/components`: React components
    - `/common`: Shared components
    - `/context`: React context providers
    - `/home`: Dashboard components
    - `/ui`: UI components (buttons, cards, etc.)
  - `/hooks`: Custom React hooks
  - `/lib`: Utilities, types, and constants
  - `/routes`: Application routes
- `/server`: Mock API server
  - `db.json`: Database for JSON Server
  - `routes.json`: API route configuration

## Routes

- `/`: Dashboard
- `/order-management`: Order management page
- `/brand`: Brand management
- `/all-products`: All products listing
- `/product-list`: Product list management

## License

This project is licensed under the MIT License.
