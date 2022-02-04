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
            /*data.payload.sort((a,b)=>{
                return b.bid-a.bid
            })*/
            state.currencies = data.payload;
        },
        sortByBid(state){
            state.currencies.sort(
                (a,b)=>{
                    return b.bid-a.bid;
                }
            )
            //console.log('works');
        },
        sortByAsk(state){
            state.currencies.sort(
                (a,b)=>{
                    return a.bid-b.bid;
                }
            )
        }
    }
})

export const {add,feedData,sortByBid,sortByAsk} = currSlice.actions;
export default currSlice.reducer