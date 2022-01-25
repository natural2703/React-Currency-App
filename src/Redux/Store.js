import { configureStore } from "@reduxjs/toolkit";
import CurrSlice from "./CurrSlice";
const store = configureStore({
    reducer:{
        currency:CurrSlice
    }
})
export default store;