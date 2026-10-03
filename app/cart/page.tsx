import Link from "next/link";
import { dishes } from "@/data/dishes";

export default function CartPage() {
  // Sample demonstration cart items
  const cartItems = dishes.slice(0, 2);
  const total = cartItems.reduce((acc, d) => acc + d.price, 0);

  return (
    <section style={{ maxWidth: "680px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "1.5rem" }}>Your Cart</h1>

      <div style={{ background: "var(--color-surface)", padding: "1.5rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", marginBottom: "2rem" }}>
        {cartItems.map((item) => (
          <div key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "1rem 0", borderBottom: "1px solid var(--color-border)" }}>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{item.name}</h3>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-light)" }}>Qty: 1</span>
            </div>
            <span style={{ fontWeight: 700, color: "var(--color-primary)" }}>{item.price} ETB</span>
          </div>
        ))}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.5rem", paddingTop: "0.5rem" }}>
          <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>Total:</span>
          <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-primary)" }}>{total} ETB</span>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
        <Link href="/menu" className="btn-secondary">
          ← Add More Dishes
        </Link>
        <Link href="/checkout" className="btn-primary">
          Proceed to Checkout ➔
        </Link>
      </div>
    </section>
  );
}
