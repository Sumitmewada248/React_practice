
import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";



const counterSlice = createSlice({
  name:"counter",
  initialState:{
    count:0,
  },
reducers:{

increment:(state)=>{
  state.count++;
},

decrement:(state)=>{

  if(state.count>0){
  state.count--;}

  else{
    message.error("Count can't be less than 0")
  }
}

}
  
})

export default counterSlice.reducer;
export const{increment,decrement}=counterSlice.actions