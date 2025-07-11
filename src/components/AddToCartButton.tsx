// components/AddToCartButton.tsx
"use client";

import { toast } from "react-hot-toast";

type Cake = {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  description: string;
  tags: string[];
  mainImage: string;
  gallery: string[];
  category: { title: string; slug: { current: string } };
};

export default function AddToCartButton({ product }: { product: Cake }) {
  const handleAddToCart = () => {
    toast.success(`Added ${product.name} to cart`);
    // Logic for real cart coming next step
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-6 px-6 py-3 bg-purple-600 text-white text-sm rounded-full hover:bg-purple-700 w-full md:w-auto"
    >
      Add to Cart
    </button>
  );
}
