import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./CartSlice";
import { ProdReducer } from "./ProdSlice";

export const RootReducer = configureStore({
    reducer: {
        cart: CartReducer,
        products: ProdReducer,
    },
});

export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;



