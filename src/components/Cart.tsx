import React from "react";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { remove } from "../global/CartSlice";
import { IProd } from "../types/Interfaces";

export const Cart = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart);
    const handleRemove = (productId: IProd) => {
        dispatch(remove(productId));
    };

    return (
        <React.Fragment>
            <h1>Cart</h1>
            <main>
                {/* {cart.map((item: IProd) => (
                    <aside key={item.id} className="cart-card">

                    </aside>
                ))} */}
            </main>
        </React.Fragment>
    );
};


