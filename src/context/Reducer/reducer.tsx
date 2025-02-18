// Import action types
import { Product } from "@/components/Ecommerce/types";
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
} from "./types";


// Define the shape of the state
interface State {
    cart: Product[];
    total: number;
    quantity: number;
    loading?: boolean;
}

// Define action types with payloads
interface ClearCartAction {
    type: typeof CLEAR_CART;
}

interface RemoveAction {
    type: typeof REMOVE;
    payload: string; // Assume payload is the product id
}

interface GetTotalsAction {
    type: typeof GET_TOTALS;
}

interface DisplayItemsAction {
    type: typeof DISPLAY_ITEMS;
    payload: Product[];
}

interface ToggleQuantityAction {
    type: typeof TOGGLE_QUANTITY;
    payload: {
        id: string;
        type: typeof INCREASE | typeof DECREASE;
    };
}

interface AddAction {
    type: typeof ADD;
    payload: {
        item: Product;
    };
}

interface CartChangeAction {
    type: typeof CART_CHANGE;
    payload: Product[];
}

// Combine all action types
type Action =
    | ClearCartAction
    | RemoveAction
    | GetTotalsAction
    | DisplayItemsAction
    | ToggleQuantityAction
    | AddAction
    | CartChangeAction;

// Initial state
const initialState: State = {
    cart: [],
    total: 0,
    quantity: 0,
    loading: true,
};

// Define the reducer function
const reducer = (state: State = initialState, action: Action): State => {
    console.log(action.type);
    console.log(state.cart)

    switch (action.type) {
        case CLEAR_CART:
            return { ...state, cart: [] };
        case REMOVE: {
            return {
                ...state,
                cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
            };
        }
        case GET_TOTALS: {
            const { total, quantity } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += quantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            return { ...state, total: parseFloat(total.toFixed(2)), quantity };
        }
        case DISPLAY_ITEMS:
            return { ...state, cart: action.payload, loading: false };
        case TOGGLE_QUANTITY: {
            const tempCart = state.cart
                .map((cartItem) => {
                    if (cartItem.id === action.payload.id) {
                        if (action.payload.type === INCREASE) {
                            return { ...cartItem, quantity: cartItem.quantity + 1 };
                        }
                        if (action.payload.type === DECREASE) {
                            return { ...cartItem, quantity: cartItem.quantity - 1 };
                        }
                    }
                    return cartItem;
                })
                .filter((cartItem) => cartItem.quantity !== 0);
            return { ...state, cart: tempCart };
        }
        case ADD:
            return { ...state, cart: [...state.cart, action.payload.item] };
        case CART_CHANGE:
            return { ...state, cart: action.payload };
        default:
            throw new Error("no matching action type");
    }
};

export default reducer;

