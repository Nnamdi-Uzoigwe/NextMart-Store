import Header from "../components/home/Header"
import ProductListing from "../components/home/ProductListing"
import Search from "../components/home/Search"

export default function Home() {
    return (
        <div>
           <Header />
           <Search />
           <ProductListing />
        </div>
    )
}