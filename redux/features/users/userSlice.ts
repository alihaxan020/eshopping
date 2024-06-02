import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, profile, updateProfile } from "./userApi";
import { SECURE_TOKEN, logoutValue } from "@/utils/scoreStorage";

export const USER_FEATURE_KEY = 'users';
export const initialState = {
    user: {},
    isLoading: false
}
const slice = createSlice({
    name: USER_FEATURE_KEY,
    initialState,
    reducers: {
    },
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
            .addMatcher(profile.matchPending, (state, action) => {
                state.isLoading = true
            })
            .addMatcher(profile.matchFulfilled, (state, action) => {
                state.isLoading = false;
                console.log("heelo: ", action.payload)
                state.user = action.payload
            })
            .addMatcher(profile.matchRejected, (state, action) => {
                state.isLoading = false
            })
            .addMatcher(updateProfile.matchPending, (state, action) => {
                state.isLoading = true
            })
            .addMatcher(updateProfile.matchFulfilled, (state, action) => {
                state.isLoading = false;
                state.user = {
                    ...state.user,
                    profile_image: action.payload.profile_image
                }
            })
            .addMatcher(updateProfile.matchRejected, (state, action) => {
                state.isLoading = false
            })
    }
})

export const userReducer = slice.reducer;