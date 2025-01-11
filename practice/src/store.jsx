import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./CounterSlice";


const store = configureStore({
    reducer:
     {  Counter: counterSlice },
})

export default store;