import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quoteList from "./quoteList";

// export const getQuote = createAsyncThunk(
//     'quote/getQuote', async () => {
        
//     }
// )
const initialState = {
    quoteList: quoteList.quotes,
    quoteIndex: 0,
    isLoading:true,
}

export const quoteSlice = createSlice({
    name:'quote',
    initialState,
    reducers: {
        random : (state) =>{
            const len = state.quoteList.length;
            state.quoteIndex = Math.floor(Math.random()*len);
            state.isLoading=false;
        }
    },
    // extraReducers: {
    //     [getQuote.pending]: (state) =>{
    //         state.isLoading = true;  
    //     },
    //     [getQuote.fulfilled]: (state, action) =>{
    //         state.isLoading = false;
    //         state.quoteText = action.payload; //action.payload is resp.json
    //     },
    //     [getQuote.rejected]: (state) =>{
    //         state.isLoading = false;  
    //     },                
    // }
})
console.log(quoteSlice);

export const { random } = quoteSlice.actions;

export default quoteSlice.reducer