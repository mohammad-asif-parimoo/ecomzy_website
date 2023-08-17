import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlice";

export const store = configureStore({
    reducer: {
        Cart: CartSlice.reducer,
    }
})