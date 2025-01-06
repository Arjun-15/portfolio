import { configureStore } from "@reduxjs/toolkit";
import { coinsReducer } from "./reducers/cryptoReducer";
import { portfolioReducer } from "./reducers/portfolioReducer";

export const store = configureStore({
    reducer:{
        coinsReducer,
        portfolioReducer,
    }
})