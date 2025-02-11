
import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count:0
    }
    ,
    reducers: {
      
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
           if(state.count>0){
            state.count -= 1;
           }
           else{
            state.count = 0
            message.error("Count cannot be less than 0")
           }
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;