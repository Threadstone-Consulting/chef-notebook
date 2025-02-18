import React, { useContext } from "react";
import { Product } from "@/components/Ecommerce/types";
import { CartContext } from "@/context/cartContext";
import CartItem from "./CartItem/CartItem";
import Check from "./Check";
import EmptyCart from "./EmptyCart";
import { Transition } from "@headlessui/react";

const Cart: React.FC<{ product: Product[]; }> = (props) => {
    const { showCart, cartToggler, cart, total, quantity } = useContext(CartContext);

    return (
        <>
            <div className="absolute md:relative top-20 md:top-8 left-0 w-full md:w-auto z-20">
                <Transition
                    show={showCart}
                    appear={true}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {quantity > 0 ? (
                        <>
                            <div className="h-[87%] flex flex-col justify-between">
                                <div className="overflow-scroll scrollbar-hide">
                                    {cart.map((item, i) => (
                                        <CartItem key={i} itemID={item.id} item={item} />
                                    ))}
                                </div>
                                <Check cartToggler={cartToggler} total={total} />
                            </div>
                        </>
                    ) : (
                        <EmptyCart />
                    )}
                </Transition >
            </div >
        </>
    );
};

export default Cart;


