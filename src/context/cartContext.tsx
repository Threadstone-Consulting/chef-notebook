"use client";

import React, { createContext, useState, useEffect, useReducer, ReactNode } from 'react';
import { Product } from '@/components/Ecommerce/types';
import { sortView } from "../libs/sort";

// Import action types for reducer
import {
    CLEAR_CART,
    REMOVE,
    GET_TOTALS,
    DISPLAY_ITEMS,
    TOGGLE_QUANTITY,
    INCREASE,
    DECREASE,
    ADD,
    CART_CHANGE,
    ACCOUNT_UPDATE,
} from "./Reducer/types";

import reducer from './Reducer/reducer';

type ICartProvider = {
    children: ReactNode;
};

interface IShoppingCart {
    cart: Product[];
    total: number;
    quantity: number;
    clearCart: () => void;
    removeItem: (id: string) => void;
    toggleQuantity: (id: string, type: typeof INCREASE | typeof DECREASE) => void;
    displayItems: (items: Product[]) => void;
    addItem: (item: Product) => void;
    getTotals: () => void;
    showCart: boolean;
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
    cartToggler: () => void;
    sorter: (rawProducts: Product[]) => Product[];
    sort: string;
    setSort: React.Dispatch<React.SetStateAction<string>>;
}

interface State {
  cart: Product[];
  total: number;
  quantity: number;
  loading?: boolean;
}

export const cartContextDefaultValue: IShoppingCart = {
    cart: [],
    total: 0,
    quantity: 0,
    clearCart: () => { },
    removeItem: () => { },
    toggleQuantity: () => { },
    displayItems: () => { },
    addItem: () => { },
    getTotals: () => { },
    showCart: false,
    setShowCart: () => { },
    cartToggler: () => { },
    sorter: () => [],
    sort: "relevance",
    setSort: () => { },
};

// Initial shopping cart reducer state
const reducerInitialState: State = {
    cart: [],
    total: 0,
    quantity: 0,
};

export const CartContext = createContext<IShoppingCart>(cartContextDefaultValue);

const CartProvider: React.FC<ICartProvider> = ({ children }) => {
    const [showCart, setShowCart] = useState<boolean>(false);
    const [sort, setSort] = useState<string>("relevance");

    // Shopping cart reducer
    const [state, dispatch] = useReducer(reducer, reducerInitialState);

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const removeItem = (id: string) => {
        dispatch({ type: REMOVE, payload: id });
    };

    const toggleQuantity = (id: string, type: typeof INCREASE | typeof DECREASE) => {
        dispatch({ type: TOGGLE_QUANTITY, payload: { id, type } });
    };

    const displayItems = (items: Product[]) => {
        dispatch({ type: DISPLAY_ITEMS, payload: items });
    };

    const addItem = (item: Product) => {
        dispatch({ type: ADD, payload: { item } });
    };

    const getTotals = () => {
        dispatch({ type: GET_TOTALS });
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCart = localStorage.getItem("cart");
            if (storedCart) {
                const cartArr = JSON.parse(storedCart);
                dispatch({ type: CART_CHANGE, payload: cartArr });
                window.addEventListener("storage", onStorageUpdate);
                return () => {
                    window.removeEventListener("storage", onStorageUpdate);
                };
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            getTotals();
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    }, [state.cart]);

    const cartToggler = () => {
        setShowCart(!showCart);
    };

    const sorter = (rawProducts: Product[]): Product[] => {
        let sortedProducts = [...rawProducts];

        sortView.forEach((item) => {
            if (item.sort === sort) {
                const arrSorter = item.arrSorter;
                sortedProducts = arrSorter(sortedProducts);
            }
        });

        return sortedProducts;
    };

    const onStorageUpdate = (e: StorageEvent) => {
        const { key, newValue } = e;
        if (key === "cart" && newValue) {
            const cartArr = JSON.parse(newValue);
            dispatch({ type: CART_CHANGE, payload: cartArr });
        }
    };

    return (
        <CartContext.Provider
            value={{
                ...state,
                clearCart,
                removeItem,
                toggleQuantity,
                displayItems,
                addItem,
                getTotals,
                showCart,
                setShowCart,
                cartToggler,
                sorter,
                sort,
                setSort,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider as default, CartProvider };

