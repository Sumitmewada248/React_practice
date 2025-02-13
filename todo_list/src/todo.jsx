// import { createSlice } from "@reduxjs/toolkit";

// const todoSlice=createSlice({
//     name:"Todo",
//     initialState:{
//         task:[]
//     },
//     reducers:{
//         addTask:(state,action)=>{
//             state.task.push(action.payload)
//         },
//         delTask:(state,action)=>{
//             state.task=state.task.filter((key)=>{
//             return key.id!=action.payload.id
//             })

//         },
     
//         editTask:(state,action)=>{
//             for(var i=0;i<state.task.length;i++){
//                 if(state.task[i].id==action.payload.id){
//                     state.task[i].work=action.payload.work;
//                 }
//             }
//         },
//         completeTask:(state,action)=>{
//             for(var i=0;i<state.task.length;i++){
//                 if(state.task[i].id==action.payload.id){
//                     state.task[i].status="complete";
//                 }
//             }
//         },

//         UnCompleteTask:(state,action)=>{
//             for( var i=0;i<state.task.length;i++){
//                 if(state.task[i].id==action.payload.id){
//                     state.task[i].status="uncomplete";
//                 }
//             }
//         }
      


//     }
// })

// export default todoSlice.reducer;
// export const {addTask,delTask,editTask,completeTask,UnCompleteTask}=todoSlice.actions;






import{ createSlice} from '@reduxjs/toolkit'


const todoSlice=createSlice({
    name:"Todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
          state.task.push(actions.payload)
        },
        delTask:(state,actions)=>{
            state.task=state.task.filter((key)=>key.id!=actions.payload.id)
        },
        completeTask:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].status="complete";
                }
            }
    },

    UnCompleteTask:(state,actions)=>{
        for( var i=0;i<state.task.length;i++){
            if(state.task[i].id==actions.payload.id){
                state.task[i].status="uncomplete";
            }
        }
    }
    }


})

export const {addTask,delTask,completeTask,UnCompleteTask}=todoSlice.actions
export default todoSlice.reducer