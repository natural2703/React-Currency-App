import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    langs:[
        {
            name:'Polish',
            code:'pl'
        },
        {
            name:'English',
            code:'eng'
        }
    ],
    choosenLang:localStorage.getItem('i18nextLng')||"pl"
}
export const LangSlice = createSlice({
    name:"langs",
    initialState,
    reducers:{
        changeLang(state,action){
            if(action.payload){
                state.choosenLang=action.payload;
            }
            else{
                if(state.choosenLang==='pl')
                    state.choosenLang='eng'
                else
                    state.choosenLang='pl'
            }
        }
    }
});


export const {changeLang} = LangSlice.actions;
export default LangSlice.reducer