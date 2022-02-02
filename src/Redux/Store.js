import { configureStore } from "@reduxjs/toolkit";
import CurrSlice from "./CurrSlice";
import LangSlice from "./LangSlice";
const store = configureStore({
    reducer:{
        currency:CurrSlice,
        lang:LangSlice
    }
})
export default store;