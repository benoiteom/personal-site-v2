# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Benoit Ortalo-Magne built with Next.js 15 (App Router), React 19, and TypeScript. Features smooth scrolling, dark mode, custom animations, and responsive design.

## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

Node version: 22 (specified in `.nvmrc`)

## Architecture

### App Structure (Next.js App Router)

- `app/page.tsx` - Entry point, renders `Home` component
- `app/home.tsx` - Main component orchestrating all sections with viewport detection (mobile/tablet/desktop)
- `app/layout.tsx` - Root layout with context providers wrapper

### Context Providers (app/context/)

Three React Context providers wrap the application:
- **ThemeProvider** (`themeContext.tsx`) - Dark/light mode with localStorage persistence
- **ScrollProvider** (`scrollContext.tsx`) - Lenis smooth scrolling integration with `scrollToById()` for anchor navigation
- **ProjectProvider** (`projectContext.tsx`) - Active project state for scroll-driven project display

### Page Sections

Each section is a separate component in `app/`:
- `landing.tsx` / `mobileLanding.tsx` - Hero section (separate mobile version)
- `projectsSection.tsx` - Projects showcase with scroll-driven transitions
  - `projectContentPanel.tsx` - Left panel with title, description, tags
  - `projectJSONStats.tsx` - JSON-formatted project stats display
- `experience.tsx` - Work experience timeline
- `aboutSection.tsx` - About section with JSON stats display
- `sidebar.tsx` - Navigation sidebar with anchor links; displays project images (Block 1) and stats (Block 2) when scrolling through projects

### Content Data (app/helpers/config.js)

All portfolio content is centralized:
- `experience` - Work history array
- `projects` - Project showcase data with links, tech stacks, images
- `aboutMe` - About section text
- `config` - WebGL smoke effect configuration

### SVG Components (app/svg/)

Reusable SVG components for icons and decorative elements (linkedin, sun/moon theme icons, resume, swirl, etc.)

## Key Patterns

### Responsive Design
`home.tsx` detects viewport using `window.innerWidth / window.innerHeight` ratio:
- Ratio < 0.6: mobile
- Ratio < 1: tablet
- Otherwise: desktop

### Smooth Scrolling
Lenis library provides smooth scroll. Use `useScrollContext().scrollToById(anchorId)` for navigation.

### Styling
- TailwindCSS for utility classes
- SCSS (`globals.scss`) for animations and advanced styling
- Custom animations defined in `tailwind.config.ts` (rotateIn90, slideInWidth, slideInHeight)

### Client Components
Most components use `"use client"` directive for interactivity and browser APIs.

### Analytics
Uses PulseKit analytics for tracking page views and Web Vitals.
