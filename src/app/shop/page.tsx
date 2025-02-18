import React from "react";
import Header from "@/components/Header";
import { data } from '@/components/Ecommerce/Products/testproducts'
import { Product } from '@/components/Ecommerce/types'
import ProductCard from "@/components/Ecommerce/Products/ProductCard";

const Shop: React.FC<{}> = (props) => {
    return (
        <>
            <Header />
            <main className={`flex min-h-screen flex-col items-center gap-4 `}>
                <section className="w-full h-full mx-auto px-4  sm:px-6 sm:py-24 lg:px-8 bg-white">
                    <h2 className="text-4xl text-black py-8">Products</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {data.map((product: Product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
};

export default Shop;
