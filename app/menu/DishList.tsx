import Link from "next/link";
import { DishItem } from "@/data/dishes";

interface DishListProps {
  dishes: DishItem[];
}

export default function DishList({ dishes }: DishListProps) {
  if (dishes.length === 0) {
    return (
      <div className="not-found-container">
        <h3>No Dishes Found</h3>
        <p>No dishes matched the selected category.</p>
      </div>
    );
  }

  return (
    <div className="dishes-grid">
      {dishes.map((dish) => (
        <article key={dish.id} className="dish-card">
          <div className="dish-meta">
            <span className="dish-category">{dish.category}</span>
            {dish.spicy && <span className="dish-badge-spicy">🌶️ Spicy</span>}
          </div>

          <div className="dish-header">
            <h3 className="dish-name">{dish.name}</h3>
            <span className="dish-price">{dish.price} ETB</span>
          </div>

          <p className="dish-description">{dish.description}</p>

          <Link href={`/menu/${dish.id}`} className="dish-link">
            View Details & Order ➔
          </Link>
        </article>
      ))}
    </div>
  );
}
