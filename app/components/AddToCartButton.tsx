"use client";

import { useCartStore } from "../store/useCartStore";

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div
      onClick={() => addToCart(product)}
      className="bg-[#7c6a46] transition-transform duration-150 active:opacity-70 hover:bg-[#56482d] cursor-pointer flex justify-center text-white py-2 px-6 rounded-[8px]"
    >
      Add to Cart
    </div>
  );
}
