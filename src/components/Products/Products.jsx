import { Link } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useEffect, useState } from "react";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://coffee-store-server-steel-five.vercel.app/coffee')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="w-full min-h-screen bg-[url(https://i.ibb.co.com/2tKnyyZ/1.png)] bg-cover my-10 sm:my-16 lg:my-20 xl:my-28m flex flex-col items-center">

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-center mb-1 md:mb-2">--- Sip & Savor ---</p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-center text-[#331A15] [text-shadow:_0_2px_4px_rgb(55_65_81_/_0.6)] mb-3 md:mb-5">Our Popular Products</h2>
            <Link to={`/addcoffee`} className="btn btn-xs sm:btn-sm xl:btn-md rounded-[5px] text-sm sm:text-base xl:text-lg bg-[#D2B48C] hover:bg-[#F5F4F1] hover:border-2 hover:border-[#331A15] border-2 border-[#331A15] text-[#331A15] font-rancho mb-6 sm:mb-8 lg:mb-10 xl:mb-12">Add Products</Link>

            <div className="w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    products.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} products={products} setProducts={setProducts}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Products;