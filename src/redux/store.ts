import { configureStore } from "@reduxjs/toolkit";
import { coinsReducer } from "./reducers/cryptoReducer";
import { portfolioReducer } from "./reducers/portfolioReducer";
import { accountReducer } from "./reducers/accountReducer";

export const store = configureStore({
    reducer:{
        coinsReducer,
        portfolioReducer,
        accountReducer,
    }
})