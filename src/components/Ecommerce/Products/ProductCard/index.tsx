"use client";

import Image from 'next/image'
import { Product } from '../../types'
import MyIcon from '@/components/MyIcon'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '@/context/cartContext'
import shopImage from "@/app/icon.png"



const ProductCard: React.FC<{ product: Product }> = (props) => {
    const { addItem } = useContext(CartContext);
    const [AddedToCart, setAddedToCart] = useState<boolean>(false);


    const handleAddToCart = (
        event: React.MouseEvent<HTMLButtonElement>,
        item: Product
    ) => {
        try {
            event.preventDefault()
            addItem(item)
            setAddedToCart(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setAddedToCart(false)
        }, 1500);
    }, [AddedToCart])


    return (
        <div key={props.product.id} className="select-none">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                    src={shopImage}
                    alt={props.product.imageAlt}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <div className="flex place-content-between">
                <div className="">
                    <h3 className="mt-4 text-sm text-gray-700">{props.product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">${props.product.price}</p>
                </div>
                <div className="flex content-center">
                    <button
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleAddToCart(e, props.product)}
                    >
                        <MyIcon
                            name={AddedToCart ? `AddedCart` : `AddCart`}
                            className={`w-8 h-auto cursor-pointer`}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
