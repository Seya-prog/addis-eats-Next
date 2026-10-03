import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <span className="hero-tag">Traditional & Modern Eatery</span>
        <h1 className="hero-title">Taste the Heritage of Addis Ababa</h1>
        <p className="hero-subtitle">
          Fresh injera, simmering clay-pot stews, tender seasoned tibs, and freshly brewed Ethiopian Arabica coffee.
        </p>
        <div className="hero-actions">
          <Link href="/menu" className="btn-primary">
            Explore Menu ➔
          </Link>
          <Link href="/cart" className="btn-secondary">
            View Cart
          </Link>
        </div>
      </section>
    </div>
  );
}
