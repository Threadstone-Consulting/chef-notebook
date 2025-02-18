import React, { useContext } from 'react';
import { Product } from '../../types';
import { CartContext } from '@/context/cartContext';
import { INCREASE, DECREASE } from '@/context/Reducer/types';
import MyIcon from '@/components/MyIcon';
import Image from 'next/image'
import shopImage from "@/app/icon.png";



const CartItem: React.FC<{ item: Product, itemID: string }> = ({ item, itemID }) => {

    const { imageSrc, imageAlt, name, color, colorCode, size, price, quantity } = item;

    const { removeItem, toggleQuantity } = useContext(CartContext);

    return (
        <div className="mt-6">
            <div className="flex flex-row">
                <Image
                    src={shopImage}
                    alt={imageAlt}
                    className="w-[20%] h-[20%] max-w-[65px] max-h-[65px] bg-purple-700 object-cover mr-3"
                />
                <div className="w-full flex flex-col justify-start">
                    <p className="text-lg">{name.replace(/_/g, " ")}</p>
                    <div className="flex flex-row mt-0.5">
                        {color && colorCode ?
                            <p>
                                color:
                                <span
                                    style={{
                                        backgroundColor: colorCode !== null ? colorCode : "transparent",
                                    }}
                                    className="ml-0.5 border-[1px] border-primarycont rounded-[50%] text-xs px-3 py-1"
                                >
                                    {colorCode !== null ? null : color}
                                </span>
                            </p>
                            :
                            null
                        }
                        {size ? (
                            <p className="ml-3">
                                size: {" "}
                                <span className="ml-0.5 p-1 border-[1px] border-primarycont rounded-[50%] text-xs">
                                    {size}
                                </span>
                            </p>
                        ) : null}
                    </div>
                </div>
                <p>{price}$</p>
            </div>
            <div className="flex flex-row mt-4">
                <button
                    onClick={() => removeItem(itemID)}
                    className="p-2 border-[1px] border-hover"
                >
                    <MyIcon name="times" />
                </button>
                <div className="flex flex-row ml-2 w-full">
                    <div className="border-[1px] border-hover p-1 pl-2 w-full">
                        {quantity}
                    </div>
                    <button
                        className="border-[1px] border-hover p-2"
                        onClick={() => toggleQuantity(itemID, DECREASE)}
                    >
                        <MyIcon name="minus" />
                    </button>
                    <button
                        className="border-[1px] border-hover p-2"
                        onClick={() => toggleQuantity(itemID, INCREASE)}
                    >
                        <MyIcon name="plus" />
                    </button>
                </div>
            </div>
        </div>
    );
}


export default CartItem;
