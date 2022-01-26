import { createSlice } from "@reduxjs/toolkit";
const initialState = {currencies:[]};
export const currSlice = createSlice({
    name:'curr',
    initialState,
    reducers:{
        add(state){
            state.currencies.push(1);
        },
        feedData(state,data){
           // console.log(data.payload)
            state.currencies = data.payload;
        }
    }
})

export const {add,feedData} = currSlice.actions;
export default currSlice.reducer