"use client"

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../store/useCartStore";

export default function CartLink() {
    const cartItems = useCartStore((state) => state.cartItems);
    return (
        <Link  href="/cart" className="relative">
            <div>
                    <ShoppingCart size={30} />
            </div>
            {cartItems.length > 0 && (
                <div className="bg-[#7c6a46] py-[2px] px-1 absolute top-[-10px] right-0 text-white flex items-center justify-center rounded-[8px] text-sm">
                {cartItems.length}
            </div>
            )}
        </Link>
    )
}