import React, { useContext, useEffect, useRef, useState } from 'react';
import MyIcon from '@/components/MyIcon';
import { Transition } from '@headlessui/react';
import Cart from '../Cart';
import { CartContext } from '@/context/cartContext';


const CartDropdown: React.FC<{}> = (props) => {
    const initalRender = useRef(true)

    const { cart, showCart, cartToggler } = useContext(CartContext)


    return (
        <>
            <div
                className={`z-10 py-1 px-4 gap-2 rounded-md flex cursor-pointer justify-between my-1 inline-flex items-center font-extrabold transition duration-150 ease-in-out focus:outline-none text-gray-700 hover:text-blue-8 hover:bg-gray-200 hover:bg-opacity-40 focus:text-blue-6 bg-gray-50`}
                onClick={() => cartToggler()}
            >
                <MyIcon name={"Cart"} />
            </div>
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
                    <div className="flex flex-col absolute right-0 z-10 w-full md:w-auto bg-gray-50 bg-opacity-90 rounded-lg">
                        <div className="pointer-events-auto w-full md:w-screen md:max-w-md h-full">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <div className="text-lg font-medium text-gray-900">
                                            Shopping cart
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <Cart product={cart} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition >
            </div >
        </>
    );
};

export default CartDropdown;
