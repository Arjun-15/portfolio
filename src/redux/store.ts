import { configureStore } from "@reduxjs/toolkit";
import { coinsReducer } from "./reducers/cryptoReducer";

export const store = configureStore({
    reducer:{
        coinsReducer,
    }
})