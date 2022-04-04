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
        sortByBid(state,data){
            state.currencies.sort(
                data.payload%2==0?
                (a,b)=>{
                    return b.bid-a.bid;
                }:
                (a,b)=>{
                    return a.bid-b.bid;
                }
            )
            //console.log('works');
        },
        sortByAsk(state,data){
            state.currencies.sort(
                data.payload%2==0?
                (a,b)=>{
                    return a.ask-b.ask;
                }:
                (b,a)=>{
                    return a.ask-b.ask;
                }
            )
        },
        sortByName(state){
            state.currencies.sort(
                (a,b)=>{
                    console.log(a.code[0]-b.code[0])
                    return b.code.charCodeAt(0)-a.charCodeAt(0);
                }
            );
        }
    }
})

export const {add,feedData,sortByBid,sortByAsk,sortByName} = currSlice.actions;
export default currSlice.reducer