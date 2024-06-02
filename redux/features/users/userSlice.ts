import { createSlice } from "@reduxjs/toolkit";
import { login } from "./userApi";

export const USER_FEATURE_KEY = 'USERS_FEATURE';
export const initialState = {
    user: {},
    isLoading: false
}

const slice = createSlice({
    name: USER_FEATURE_KEY,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(login.matchPending, (state, action) => {
            state.isLoading = true
        })
            .addMatcher(login.matchFulfilled, (state, action) => {
                state.isLoading = false;
                console.log("heelo: ", action.payload)
                state.user = action.payload.user
            })
            .addMatcher(login.matchRejected, (state, action) => {
                state.isLoading = false
            })
    }
})

export const userReducer = slice.reducer