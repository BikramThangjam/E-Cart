// STore manages data indirectly via reducers.

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";

const store = configureStore({
    reducer: {
        //we can define  multiple reducers here. 
        cartItems: cartReducer
    }
});

export default store;