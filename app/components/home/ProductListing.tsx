import Link from "next/link"
import productData  from "../../data/productData"
import ProductCard from "../ProductCard"

export default function ProductListing() {
    const categories = [
        {
            id: 1,
            value: "All"
        },
        {
            id: 2,
            value: "Home"
        },
        {
            id: 3,
            value: "Clothing"
        },
        {
            id: 4,
            value: "Accessories"
        },
        {
            id: 5,
            value: "Shoes"
        },
        {
            id: 6,
            value: "Electronics"
        },
        {
            id: 7,
            value: "Beauty"
        },
    ]
    return (
        <div className="px-6 lg:px-60">
            <section className="mt-6 flex flex-wrap gap-6 justify-start lg:justify-center">
                {categories.map((item) => (
                    <div key={item.id} className="shadow-sm font-semibold rounded-[20px] py-3 text-sm lg:text-md px-4 lg:px-8 bg-gray-100 cursor-pointer">
                        {item.value}
                    </div>
                ))}
            </section>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                {productData.slice(0, 14).map((item) => (
                    <ProductCard 
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>

            <div className="mt-10 flex justify-center">
                <Link href="/products">
                    <button className="text-white bg-[#7c6a46] py-2 rounded-[8px] px-8">See all products</button>
                </Link>
            </div>
        </div>
    )
}