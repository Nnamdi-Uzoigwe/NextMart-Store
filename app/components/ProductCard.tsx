import AddToCartButton from "./AddToCartButton";

interface productCardProps {
  name: string;
  price: number;
}

export default function ProductCard({ name, price }: productCardProps) {
  return (
    <div className="bg-gray-100 shadow-md overflow-hidden h-auto min-h-[200px] rounded-[14px] grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-gray-200 p-4">img</div>
      <div className="p-4">
        <h5 className="text-lg font-semibold mb-4">{name}</h5>
        <p className="mb-4">{price}</p>
        <AddToCartButton />
      </div>
    </div>
  );
}
