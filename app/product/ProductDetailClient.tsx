"use client";

import React, { useState } from "react";
import Image from "next/image";
import AddToCartButton from "@/app/components/AddToCartButton";
import { Minus, Plus } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category?: string;
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="px-6 lg:px-60 pb-20">
      <div className="mt-10 relative w-full h-auto min-h-[400px]">
        <Image src={product?.image} alt={product?.name} fill />
      </div>
      <h2 className="text-3xl font-semibold my-2">{product?.name}</h2>
      <p className="mb-4">{product?.description}</p>

      <div className="flex flex-col justify-center">
        <AddToCartButton product={product} />

      </div>
    </div>
  );
}
