import Link from "next/link";
import CartLink from "./CartLink";
import { Menu } from "lucide-react";


export default function Navbar() {
    
    return (
        <div className="px-6 lg:px-60 flex justify-between items-center w-full h-[90px] shadow-sm">
            <div className="text-[#7c6a46] text-2xl font-semibold">
                NextMart
            </div>

            <div className="hidden font-medium lg:flex gap-6">
                <Link href="/"  className="hover:text-[#7c6a46]">Home</Link>
                <Link href="/products"  className="hover:text-[#7c6a46]">Products</Link>
                <Link href="/" className="hover:text-[#7c6a46]">Sign in</Link>
            </div>

            <div className="flex items-center gap-6">
                <CartLink  />

                <div className="cursor-pointer hidden lg:flex bg-[#7c6a46] hover:bg-[#56482d] text-white py-2 px-6 rounded-[8px]">Light/Dark</div>
            
                <div className="block lg:hidden">
                    <Menu  size={28}/>
                </div>
            </div>
        </div>
    )
}