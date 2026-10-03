import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Addis Eats | Authentic Ethiopian Cuisine",
  description: "Experience the rich traditional flavors of Addis Ababa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="app-header">
          <div className="nav-container">
            <Link href="/" className="brand-link">
              <span>🇪🇹 Addis Eats</span>
              <span className="brand-badge">Next.js App</span>
            </Link>

            <nav className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/menu" className="nav-link">Menu</Link>
              <Link href="/cart" className="nav-link">Cart</Link>
              <Link href="/checkout" className="nav-link">Checkout</Link>
            </nav>
          </div>
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="app-footer">
          <p>© {new Date().getFullYear()} Addis Eats • Next.js App Router • Addis Ababa, Ethiopia</p>
        </footer>
      </body>
    </html>
  );
}
