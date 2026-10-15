# Addis Eats — Component Boundary Map (BOUNDARY.md)

This document maps every component in **Addis Eats**, specifies whether it executes on the **Server** or the **Client**, and documents the technical rationale.

---

## Boundary Architecture Table

| Component | Location | Boundary | Why it runs here |
| :--- | :--- | :--- | :--- |
| **RootLayout** | `app/layout.tsx` | **Server Component** | Keeps the HTML document shell, head metadata, and global navigation static with zero client bundle overhead. |
| **HomePage** | `app/page.tsx` | **Server Component** | Marketing banner and CTA links; contains no browser event listeners or state. |
| **MenuPage** | `app/menu/page.tsx` | **Client Component (`'use client'`)** | Coordinates live category chip filtering and search interaction in local state. |
| **CategoryBar** | `app/menu/CategoryBar.tsx` | **Client Component (`'use client'`)** | Listens to user `onClick` events to toggle active category chips. |
| **DishList** | `app/menu/DishList.tsx` | **Server-Compatible / Client Child** | Renders static dish card markup and links; runs on client as a child of `MenuPage`. |
| **DishDetailPage** | `app/menu/[id]/page.tsx` | **Server Component** | Accesses route params, looks up dish from data module, and calls `notFound()` on the server. |
| **MenuLoading** | `app/menu/loading.tsx` | **Server Component** | Suspense fallback rendered immediately by the streaming server pipeline. |
| **MenuError** | `app/menu/error.tsx` | **Client Component (`'use client'`)** | Required by Next.js to catch runtime errors and provide the interactive `reset()` retry button. |
| **NotFound** | `app/not-found.tsx` | **Server Component** | Static 404 UI rendered on the server when a resource is missing. |
| **CartPage** | `app/cart/page.tsx` | **Client Component (`'use client'`)** | Reads and synchronizes user cart state and totals from client memory. |
| **CheckoutPage** | `app/checkout/page.tsx` | **Hybrid (Server Form + Client Enhancement)** | Uses a Server Action for progressive enhancement; operates even with JavaScript disabled. |
| **Dishes Route** | `app/api/dishes/route.ts` | **Server (Route Handler)** | Executes solely on the Node.js/Edge runtime; never shipped to client. |
| **Orders Route** | `app/api/orders/route.ts` | **Server (Route Handler)** | Server-side validation, HTTP status generation, and persistence. |
| **createOrder Action** | `app/actions/order.ts` | **Server Action (`'use server'`)** | Secure server-side mutation callable via form action or RPC without API boilerplate. |

---

## Boundary Principles
1. **Default to Server**: Every component is a Server Component unless interactive event handlers (`onClick`, `onChange`), browser APIs (`localStorage`), or React hooks (`useState`, `useEffect`) are strictly necessary.
2. **Push Client Boundaries Down**: Keep client boundaries as leaf components (`CategoryBar.tsx`) to prevent unnecessary hydration of static trees.
