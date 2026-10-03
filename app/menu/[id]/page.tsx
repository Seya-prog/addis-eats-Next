import { notFound } from "next/navigation";
import Link from "next/link";
import { getDishById, getAllDishes } from "@/data/dishes";

export function generateStaticParams() {
  return getAllDishes().map((dish) => ({
    id: dish.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DishDetailPage({ params }: PageProps) {
  const { id } = await params;
  const dish = getDishById(id);

  if (!dish) {
    notFound();
  }

  return (
    <article className="dish-detail-container">
      <Link href="/menu" className="back-link">
        ← Back to Menu
      </Link>

      <div className="dish-meta">
        <span className="dish-category">{dish.category}</span>
        {dish.spicy && <span className="dish-badge-spicy">🌶️ Spicy</span>}
      </div>

      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
        {dish.name}
      </h1>

      <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)", marginBottom: "2rem", lineHeight: 1.6 }}>
        {dish.description}
      </p>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem" }}>
        <div>
          <span style={{ fontSize: "0.85rem", color: "var(--color-text-light)", display: "block" }}>Price per serving</span>
          <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--color-primary)" }}>{dish.price} ETB</span>
        </div>

        <Link href="/cart" className="btn-primary">
          Add to Cart & Checkout ➔
        </Link>
      </div>
    </article>
  );
}
