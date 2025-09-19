"use client";

import { useCartStore } from "@/app/store/useCartStore";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";

const CartListing = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const calculateSubtotal = useCartStore((state) => state.calculateSubtotal);
  const calculateTotal = useCartStore((state) => state.calculateTotal);

  const subtotal = calculateSubtotal();
  const total = calculateTotal();
  const tax = subtotal * 0.1;

  if(cartItems.length === 0) return <div className="flex justify-center items-center font-semibold my-10">No Cart Items Found</div>


  return (
    <div className="flex flex-col lg:flex-row w-full items-start gap-4 lg:gap-8">

    <div className="w-full lg:w-5/8">
      {cartItems.map((item) => (
        <div
        className="mt-4 py-6 border-b-2 border-gray-400 flex flex-col lg:flex-row justify-between items-start lg:items-center"
          key={item.id}
        >
          <div>
            <h4 className="text-lg font-semibold mb-2">{item?.name}</h4>
            <p>
              Price: <span className="font-semibold">${item?.price}</span>
            </p>
          </div>

          <div>
            <div className="mt-4 flex gap-4 items-center">
              <p className="font-medium">Select Quantity</p>
              <button
                className="bg-[#7c6a46] cursor-pointer text-white p-2 rounded-[8px]"
                onClick={() => incrementQuantity(item.id)}
              >
                <Plus />
              </button>
              <p className="font-semibold">{item?.quantity}</p>
              <button
                className="bg-[#7c6a46] cursor-pointer text-white p-2 rounded-[8px]"
                onClick={() => decrementQuantity(item.id)}
              >
                <Minus />
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="my-4">
        <p className="text-2xl font-semibold">
          Subtotal:{" "}
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </p>
      </div>
    </div>

    <div className="border-2 border-gray-400 w-full lg:w-3/8 bg-gray-100 rounded-[8px] p-4 lg:p-6 h-auto">
          <p className="text-xl font-semibold">
          Subtotal:{" "}
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </p>
        <p className="font-semibold text-xl my-3">Tax: ${tax.toFixed(2)}</p>
        <p className="font-semibold text-xl">Total: ${total.toFixed(2)}</p>

        <div className="mt-4">
            <Link href="/checkout" className="bg-[#7c6a46] py-2 px-8 rounded-[8px] w-full flex justify-center text-white">Proceed to Checkout</Link>
        </div>
    </div>
        
    </div>
  );
};

export default CartListing;
