# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a practice repository for learning React, containing a Next.js 15 application with modern React 19, TypeScript, and Tailwind CSS 4. The actual Next.js project is located in the `practice-react/` subdirectory.

## Development Commands

All commands should be run from the `practice-react/` directory:

```bash
cd practice-react
```

### Initial Setup
- **Install dependencies**: `npm install` (required before first build/dev)

### Core Development
- **Start development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build for production**: `npm run build` (also uses Turbopack)
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint` (ESLint with Next.js and TypeScript rules)

### Package Management
- **Install dependencies**: `npm install`
- **Add new dependency**: `npm install <package-name>`
- **Add dev dependency**: `npm install -D <package-name>`

## Architecture & Structure

### Project Structure
The actual Next.js application resides in `practice-react/` with the following key structure:
- `src/app/` - App Router directory (Next.js 13+ app directory structure)
- `public/` - Static assets (SVG icons, images)
- Configuration files at root level

### Key Technologies
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with modern features
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 4**: Utility-first CSS framework with new @import and @theme syntax
- **Turbopack**: Next-generation bundler for faster development builds

### TypeScript Configuration
- Strict mode enabled with comprehensive type checking
- Path alias configured: `@Andrew Koves 20126313/*` maps to `./src/*`
- Modern ES2017 target with bundler module resolution

### Styling Architecture
- Uses new Tailwind CSS 4 syntax with `@import "tailwindcss"`
- CSS custom properties for theming with light/dark mode support
- Geist font family (both sans and mono) via next/font/google

### ESLint Configuration
- Uses flat config format (eslint.config.mjs)
- Extends Next.js core web vitals and TypeScript rules
- Ignores build directories and generated files

## Development Notes

### App Router Structure
This project uses Next.js App Router (not Pages Router):
- `src/app/layout.tsx` - Root layout component
- `src/app/page.tsx` - Home page component
- `src/app/globals.css` - Global styles

### Turbopack Usage
The project is configured to use Turbopack for both development and build commands, providing faster compilation times.

### Font Optimization
Uses Next.js font optimization with Geist font family, configured with CSS variables for easy theming.

### Responsive Design
Components use Tailwind's responsive prefixes (`sm:`, `md:`, etc.) and the codebase follows mobile-first design principles.