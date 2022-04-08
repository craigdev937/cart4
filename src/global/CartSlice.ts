import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProd, ICartState } from "../types/Interfaces";

const initialState: ICartState = {
    item: {
        id: 0, title: "",
        price: 0, description: "",
        category: "", image: "",
        rating: {
            rate: 0, count: 0
        }
    },
    cart: []
};

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<IProd>) => {
            state.cart.push(action.payload)
        },
        remove: (state, action: PayloadAction<{}>) => {
            state.cart.filter(
                (item) => item.id !== action.payload)
        },
    }
});

export const { add, remove } = CartSlice.actions;
export const CartReducer = CartSlice.reducer;




