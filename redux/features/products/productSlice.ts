import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productApi";

export const PRODUCT_FEATURE_KEY = 'products';

export const initialState = {
    products: [],
    isLoading: false
}
const slice = createSlice({
    name: PRODUCT_FEATURE_KEY,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(getProducts.matchPending, (state, action) => {
            state.isLoading = true
        })
            .addMatcher(getProducts.matchFulfilled, (state, action) => {
                state.isLoading = false,
                    console.log(action);
            })
            .addMatcher(getProducts.matchRejected, (state, action) => {
                console.error(action)
                state.isLoading = false
            })
    }
})

export const productReducer = slice.reducer
