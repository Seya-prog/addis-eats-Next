# Addis Eats — Next.js Production Architecture

Complete **Addis Eats** food ordering application migrated to the **Next.js 15 App Router** with TypeScript, Server Actions, Route Handlers, and robust rendering boundaries.

---

## 1. Project Documents
- **[STRATEGY.md](./STRATEGY.md)**: Every route, its rendering strategy (Static SSG, Client CSR, Hybrid), and line-by-line architectural reasoning.
- **[BOUNDARY.md](./BOUNDARY.md)**: Every component, which execution side it runs on (Server Component vs. Client Component), and why.

---

## 2. API Endpoints & Status Codes

| Endpoint | Method | Expected Status | Description | Example curl command |
| :--- | :--- | :--- | :--- | :--- |
| `/api/dishes` | `GET` | **200 OK** | Returns complete dishes array with edge cache headers. | `curl -i http://localhost:3000/api/dishes` |
| `/api/orders` | `POST` | **201 Created** | Accepts valid order payload, returns unique order confirmation. | `curl -i -X POST http://localhost:3000/api/orders -H "Content-Type: application/json" -d "{\"name\":\"Abebe\",\"phone\":\"0911223344\",\"area\":\"Bole\",\"total\":480}"` |
| `/api/orders` | `POST` | **422 Unprocessable** | Returns structured field errors when validation fails. | `curl -i -X POST http://localhost:3000/api/orders -H "Content-Type: application/json" -d "{\"name\":\"A\"}"` |
| `/api/orders` | `POST` | **400 Bad Request** | Returns error when JSON syntax is malformed. | `curl -i -X POST http://localhost:3000/api/orders -H "Content-Type: application/json" -d "invalid-json"` |

---

## 3. Server Actions & Progressive Enhancement
- **Action**: `placeOrderAction` in `app/actions/order.ts`.
- **Resilience**: The `/checkout` route utilizes React 19 / Next.js Server Actions (`useActionState`) so the form submits successfully even when JavaScript is disabled in the browser.

---

## 4. Production Build Verification

```text
Route (app)                                 Size  First Load JS
┌ ○ /                                      171 B         106 kB
├ ○ /_not-found                            127 B         103 kB
├ ƒ /api/dishes                            127 B         103 kB
├ ƒ /api/orders                            127 B         103 kB
├ ○ /cart                                  171 B         106 kB
├ ○ /checkout                              3.2 kB        109 kB
├ ○ /menu                                1.73 kB         108 kB
└ ● /menu/[id]                             171 B         106 kB
    ├ /menu/doro-wat
    ├ /menu/special-kitfo
    ├ /menu/beef-tibs
    └ [+6 more paths]
+ First Load JS shared by all             103 kB
  ├ chunks/255-ce8c7c75002f810b.js       46.5 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.99 kB

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```

---

## 5. Failure & Resilience Verification Checks

1. **Unknown Route Check**: Visiting `/menu/unknown-dish` invokes `notFound()` and renders the custom `not-found.tsx` screen with status 404.
2. **JavaScript Disabled**: `/checkout` form submits natively via POST Server Action and renders confirmation without any client JS bundle loaded.
3. **Network Failure**: `app/menu/error.tsx` catches runtime fetch/data errors with an interactive reset button.
4. **Suspense Loading**: `app/menu/loading.tsx` renders animated skeletons during route transitions.
