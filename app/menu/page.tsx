'use client';

import { useState, useMemo } from "react";
import { dishes } from "@/data/dishes";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

const CATEGORIES = ["All", "Meat", "Vegetarian", "Appetizers", "Beverages"];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDishes = useMemo(() => {
    if (selectedCategory === "All") return dishes;
    return dishes.filter((dish) => dish.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 800, marginBottom: "0.5rem" }}>Our Menu</h1>
        <p style={{ color: "var(--color-text-muted)" }}>
          Authentic delicacies prepared freshly with traditional herbs and berbere.
        </p>
      </div>

      <CategoryBar
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <DishList dishes={filteredDishes} />
    </section>
  );
}
