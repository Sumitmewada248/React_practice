// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./counterSlice";
// export const store = configureStore({
//     reducer: {
//         counter: counterSlice
//     },
// });
// export default store;



import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice"
 export const store=configureStore({
    reducer:{
     counter:counterSlice
    }
})
export default store;