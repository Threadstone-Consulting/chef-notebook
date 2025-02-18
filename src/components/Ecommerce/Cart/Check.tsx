
import React from "react";
import Link from "next/link";

interface CheckProps {
  total: number;
  cartToggler: () => void;
}

const Check: React.FC<CheckProps> = ({ total: subtotal, cartToggler }) => {
  return (
        <div className={`my-3 text-sm  font-mono capitalize `} >
            <div className="min-w-full min-h-[1px] bg-primarycont my-2 -mx-10"></div>
            <div className="flex flex-row justify-between">
                <div>Total</div>
                <div>${subtotal}</div>
            </div>
            <div className="my-1 flex flex-row justify-between">
                <div>Tax</div>
                <div>Calculated at Checkout</div>
            </div>
            <div className="flex flex-row justify-between">
                <div>Shipping</div>
                <div>FREE</div>
            </div>
            <div className="min-w-full min-h-[1px] bg-hover my-2"></div>
            <div className="flex flex-row justify-between text-base">
                <div>Total</div>
                <div>${subtotal}</div>
            </div>
            <div className="w-full mt-4 py-5 text-lg bg-primarycont text-primarycont text-center">
                <button onClick={cartToggler}>
                    <Link href="/checkout">Proceed to Checkout</Link>
                </button>
            </div>
        </div>
    );
}
export default Check;
