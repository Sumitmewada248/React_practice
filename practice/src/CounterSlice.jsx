import { createSlice } from "@reduxjs/toolkit";

import { message } from "antd";

const counterSlice =createSlice({

name:"counter",
initialState:{
    count:0,
},
reducers:{

    increment:(state)=>{
        state.count=state.count+9;
    },
    decrement:(state)=>{
        if(state.count>0){
        state.count=state.count-10;
    }
    else{
        message.error("Counter is already 0");
    }

}



}
})


export default counterSlice.reducer;
export const {increment,decrement}=counterSlice.actions;    