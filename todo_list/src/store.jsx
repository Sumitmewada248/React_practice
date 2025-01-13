import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo";

const store=configureStore({
    reducer:{

        Todo:todoSlice


    }
})

export default store;