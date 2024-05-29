import { ConfigureStoreOptions, combineReducers, configureStore } from "@reduxjs/toolkit";
import { PRODUCT_FEATURE_KEY, productReducer } from "./features/products/productSlice";
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
    [PRODUCT_FEATURE_KEY]: productReducer,
    [api.reducerPath]: api.reducer
})


export const createStore = (options?: ConfigureStoreOptions["preloadedState"] | undefined) => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(api.middleware),

    devTools: true,
    enhancers: (getDefaultEnhancer) => getDefaultEnhancer().concat([]),
    ...options
})

export const store = createStore();
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;