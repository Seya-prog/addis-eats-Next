# Addis Eats — Next.js App Router Migration

A full-featured Next.js application for **Addis Eats** with TypeScript, App Router, and server-side route conventions.

## Route Tree

```text
addis-eats-Next/
├── app/
│   ├── layout.tsx         # Root shell with global navigation & metadata
│   ├── page.tsx           # Home landing page with hero banner
│   ├── globals.css        # Global CSS design tokens and styles
│   ├── not-found.tsx      # Global 404 handler for unknown routes
│   ├── menu/
│   │   ├── page.tsx       # Main menu page with dynamic category filtering
│   │   ├── CategoryBar.tsx# Stateless category chips component
│   │   ├── DishList.tsx   # Dishes grid linking to dynamic dish pages
│   │   ├── loading.tsx    # Suspense skeleton shown during segment transitions
│   │   ├── error.tsx      # Client error boundary for menu failures
│   │   └── [id]/
│   │       └── page.tsx   # Dynamic dish route with SSG (generateStaticParams) & notFound()
│   ├── cart/
│   │   └── page.tsx       # Cart overview & total calculation
│   └── checkout/
│       └── page.tsx       # TeleBirr checkout & delivery details form
├── data/
│   └── dishes.ts          # Strongly typed Addis Eats dishes dataset
├── package.json
└── tsconfig.json
```

## Features

1. **Next.js App Router & TypeScript**: Built with Next.js 15, React 19, and full TypeScript type definitions.
2. **Dynamic Routes with `notFound()`**: `/menu/[id]` fetches individual dishes and gracefully triggers the 404 state if an unknown dish ID is provided.
3. **Route Segments & Loading Skeletons**: `loading.tsx` provides automatic segment skeletons.
4. **Segment Error Boundary**: `error.tsx` catches runtime errors with a retry action.
5. **Static Site Generation (SSG)**: `generateStaticParams` pre-renders all menu items for fast performance.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
