'use client';

interface CategoryBarProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function CategoryBar({
  categories,
  selectedCategory,
  onSelect,
}: CategoryBarProps) {
  return (
    <nav className="category-bar" aria-label="Menu categories">
      <div className="category-chips">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              className={`category-chip ${isSelected ? 'category-chip--active' : ''}`}
              onClick={() => onSelect(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
