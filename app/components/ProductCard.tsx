import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import Link from "next/link";

interface productCardProps {
  name: string;
  price: number;
  image: string;
  id: number;
}

export default function ProductCard({ id, name, price, image }: productCardProps) {
  return (
    <div className="bg-gray-50 shadow-sm overflow-hidden h-auto min-h-[300px] rounded-[14px] grid grid-cols-1">
      <div className="bg-gray-200 relative w-full h-[300px] p-4">
          <Image
            src={image} 
            fill
            alt={name}
          />
      </div>
      <div className="p-4 flex flex-col justify-center gap-4">
        <div>
        <h5 className="text-lg font-semibold mb-4">{name}</h5>
        <p className="mb-4">${price}</p>
        </div>
        <div className="flex flex-col gap-2">
        <AddToCartButton product={{ id, name, price }} />
        <Link className="border-2 border-black p-2 rounded-xl flex justify-center items-center" href={`/product/${id}`} >See More</Link>
        </div>
      </div>
    </div>
  );
}
