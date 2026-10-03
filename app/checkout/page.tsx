import Link from "next/link";

export default function CheckoutPage() {
  return (
    <section style={{ maxWidth: "620px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>TeleBirr Checkout</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
        Enter your delivery address and TeleBirr contact number.
      </p>

      <form style={{ background: "var(--color-surface)", padding: "2rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)" }}>
        <div style={{ marginBottom: "1.25rem" }}>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem" }}>Full Name</label>
          <input type="text" placeholder="Abebe Kebede" style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--color-border)" }} />
        </div>

        <div style={{ marginBottom: "1.25rem" }}>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem" }}>TeleBirr Phone Number</label>
          <input type="tel" placeholder="0911223344" style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--color-border)" }} />
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem" }}>Delivery Area</label>
          <select style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--color-border)" }}>
            <option>Bole</option>
            <option>Kazanchis</option>
            <option>Sarbet</option>
            <option>Piazza</option>
            <option>CMC</option>
          </select>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/cart" className="btn-secondary">
            ← Back to Cart
          </Link>
          <button type="button" className="btn-primary">
            Pay with TeleBirr ➔
          </button>
        </div>
      </form>
    </section>
  );
}
