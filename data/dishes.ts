export interface DishItem {
  id: string;
  name: string;
  price: number;
  category: 'Meat' | 'Vegetarian' | 'Appetizers' | 'Beverages';
  spicy: boolean;
  description: string;
}

export const dishes: DishItem[] = [
  {
    id: 'doro-wat',
    name: 'Doro Wat',
    price: 480,
    category: 'Meat',
    spicy: true,
    description: 'Slow-simmered tender chicken drumstick in rich berbere sauce with caramelized onions and a hard-boiled egg.'
  },
  {
    id: 'special-kitfo',
    name: 'Special Kitfo',
    price: 550,
    category: 'Meat',
    spicy: true,
    description: 'Minced prime lean beef warmed in spiced clarified butter (niter kibbeh) and fiery mitmita spice blend.'
  },
  {
    id: 'beef-tibs',
    name: 'Sizzling Beef Tibs',
    price: 450,
    category: 'Meat',
    spicy: false,
    description: 'Tender beef cubes flash-sautéed with sweet onions, garlic, fresh rosemary, and mild peppers.'
  },
  {
    id: 'beyaynetu',
    name: 'Beyaynetu (Veggie Feast)',
    price: 360,
    category: 'Vegetarian',
    spicy: false,
    description: 'Vibrant combination platter of yellow split peas (kik alicha), spicy red lentils (misir wat), and collard greens (gomen).'
  },
  {
    id: 'shiro-tegabino',
    name: 'Shiro Tegabino',
    price: 290,
    category: 'Vegetarian',
    spicy: true,
    description: 'Rich spiced chickpea and split pea flour stew, served bubbling hot in an earthenware clay pot.'
  },
  {
    id: 'gomen',
    name: 'Gomen (Collard Greens)',
    price: 260,
    category: 'Vegetarian',
    spicy: false,
    description: 'Fresh collard greens slow-cooked with diced onions, garlic, ginger, and Ethiopian spices.'
  },
  {
    id: 'sambusa',
    name: 'Crispy Veggie Sambusa',
    price: 150,
    category: 'Appetizers',
    spicy: false,
    description: 'Golden, flaky pastry triangles filled with seasoned lentils, green peppers, and fresh herbs (3 pcs).'
  },
  {
    id: 'kategna',
    name: 'Kategna with Ayib',
    price: 180,
    category: 'Appetizers',
    spicy: true,
    description: 'Toasted injera strips glazed with fiery berbere and spiced butter, paired with fresh cottage cheese.'
  },
  {
    id: 'coffee-ceremony',
    name: 'Traditional Coffee Ceremony',
    price: 120,
    category: 'Beverages',
    spicy: false,
    description: 'Freshly roasted and brewed Ethiopian Arabica coffee served in a clay jebena with popped corn.'
  }
];

export function getAllDishes(): DishItem[] {
  return dishes;
}

export function getDishById(id: string): DishItem | undefined {
  return dishes.find((d) => d.id === id);
}
