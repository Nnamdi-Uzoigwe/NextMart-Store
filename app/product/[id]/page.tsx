
import productData from "@/app/data/productData";
import ProductDetailClient from "../ProductDetailClient";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = Number(id);
  const product = productData.find(p => p.id === productId);

  if (!product) {
  return <div>Product not found</div>;
}

  return <ProductDetailClient product={product} />;
}
