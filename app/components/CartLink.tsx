import { ShoppingCart } from "lucide-react";
import Link from "next/link";


export default function CartLink() {
    const cartItems = 0;
    return (
        <div className="relative">
            <Link href="/cart">
                    <ShoppingCart size={30} />
            </Link>
            <div className="bg-[#7c6a46] py-[2px] px-1 absolute top-[-10px] right-0 text-white flex items-center justify-center rounded-[8px] text-sm">{cartItems}</div>
        </div>
    )
}