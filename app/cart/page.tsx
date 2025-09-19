import CartListing from "../components/cart/CartListing";

export default function Cart() {
    return (
        <div className="px-6 lg:px-60 py-20 h-auto min-h-screen">
            <h2 className="font-semibold text-3xl">Cart Details</h2>

            <CartListing />
        </div>
    )
}