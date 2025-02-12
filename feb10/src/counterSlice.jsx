// import { createSlice } from "@reduxjs/toolkit";
// import { message } from "antd";

// const counterSlice = createSlice({
//     name: "counter",
//     initialState: {
//         count: 0,
//         color: "red"
//     },
//     reducers: {
//         increment: (state) => {
//             state.count += 1;
//         },
//         decrement: (state) => {
//             if (state.count > 0) {
//                 state.count -= 1;
//             } else {
//                 state.count = 0;
//                 message.error("Count cannot be less than 0");
//             }
//         },
//         colorChange: (state) => {
//             state.color = "blue"; // Corrected property for color change
//         },
//     },
// });

// export const { increment, decrement, colorChange } = counterSlice.actions;
// export default counterSlice.reducer;


import {createSlice} from "@reduxjs/toolkit";
import { message } from "antd";



const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0,
        color:"red"
    },
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },

        decrement:(state)=>{
           if( state.count>0){
            state.count-=1;
           }
           else{
            message.error("data not found")
           }
        },
        bgcolor:(state)=>{
          state.color="yellow"
        }
    }

})

export const {increment,decrement,bgcolor}=counterSlice.actions
export default counterSlice.reducer


