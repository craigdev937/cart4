import { createSlice, createAsyncThunk, 
    PayloadAction } from "@reduxjs/toolkit";
import { IProd, ICartState, IProdState } from "../types/Interfaces";

const URL = "https://fakestoreapi.com/products";
export const fetchProd = 
createAsyncThunk("products/fetchProd", 
async () => {
    const res: Response = await fetch(URL);
    const products: IProd[] = await res.json();
    return [...products];
});

const initialState: IProdState = {
    products: [],
    loading: false,
    error: null
};

const ProdSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchProd.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [fetchProd.pending.toString()]: (state) => {
            state.loading = true
        },
        [fetchProd.fulfilled.type]: 
        (state, action: PayloadAction<IProd[]>) => {
            state.loading = false,
            state.products = [...action.payload]
        },
    },
});

export const ProdReducer = ProdSlice.reducer;


