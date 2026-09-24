export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  rating: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1290000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description:
      "Comfortable wireless headphones with clear sound and long battery life.",
    stock: 12,
    rating: 4.7,
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 1890000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description:
      "A modern smartwatch for everyday activity tracking and notifications.",
    stock: 8,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    price: 990000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description:
      "Lightweight running shoes designed for comfortable daily training.",
    stock: 20,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Minimal Backpack",
    category: "Fashion",
    price: 650000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    description:
      "A simple and practical backpack for school, work and everyday use.",
    stock: 15,
    rating: 4.4,
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug",
    category: "Home",
    price: 180000,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    description:
      "A minimalist ceramic mug suitable for coffee, tea and everyday drinks.",
    stock: 30,
    rating: 4.6,
  },
  {
    id: 6,
    name: "Desk Lamp",
    category: "Home",
    price: 420000,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    description:
      "A compact desk lamp with a clean design for study and work spaces.",
    stock: 10,
    rating: 4.3,
  },
];