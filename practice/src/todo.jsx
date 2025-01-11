

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,action)=>{
            state.task.push(action.payload)
        },
        
        editTask:(state,action)=>{
            state.task.map((key)=>{
                if(key.id==action.payload.id){
                    key.work=action.payload.work
                }
            })
        },
        deleteTask:(state,action)=>{
            state.task=state.task.filter((key)=>{return key.id!=action.payload.id
            })
        }
    }
})

export const {addTask,deleteTask,editTask} = todoSlice.actions;
export default todoSlice.reducer