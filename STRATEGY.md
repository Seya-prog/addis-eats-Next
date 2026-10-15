# Addis Eats — Route Rendering Strategies (STRATEGY.md)

This document defines every route in the **Addis Eats** Next.js application, its rendering strategy, and the architectural reasoning.

---

## Route Strategy Table

| Route | Path | Strategy | Reasoning |
| :--- | :--- | :--- | :--- |
| **Home** | `/` | **Static (SSG)** | Pure marketing & hero landing page with static content; changes rarely and requires instant TTFB. |
| **Menu Overview** | `/menu` | **Static (SSG) / ISR** | Menu catalog with categories; pre-rendered at build time with fast edge delivery and client-side category filtering. |
| **Dish Details** | `/menu/[id]` | **Static (SSG via `generateStaticParams`)** | Pre-renders all 9 known dish paths at build time for instant page loads; falls back to 404 via `notFound()` for unknown items. |
| **Cart** | `/cart` | **Client-Rendered (CSR)** | User-specific shopping cart session requiring localStorage state access and immediate UI updates. |
| **Checkout** | `/checkout` | **Hybrid (Server Form + Client Enhancement)** | Progressive enhancement with Server Actions: works with JavaScript disabled, enhances with live client validation when JS is on. |
| **Dishes API** | `/api/dishes` | **Static Route Handler (GET)** | Returns JSON list of dishes with cache headers for client/external consumers. |
| **Orders API** | `/api/orders` | **Dynamic Route Handler (POST)** | Processes incoming order payloads and generates verified order numbers with HTTP 201 or 422. |
| **Order Action** | `createOrder` Server Action | **Server Action (POST)** | Direct server mutation invoked from form actions; resilient to disabled JavaScript. |
| **Not Found** | `/_not-found` (`/404`) | **Static (SSG)** | Standardized 404 error page displayed when unknown routes or dishes are visited. |

---

## Alignment with Next.js Build Output
- Routes marked **Static (`○` or `●`)** compile to static HTML at build time.
- Dynamic route handlers or actions execute on demand with zero client JS overhead.
