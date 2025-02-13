
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTask,delTask,editTask,completeTask,UnCompleteTask } from "./todo";


// const App=()=>{
// const [task,setTask]=useState("");
// const dispatch=useDispatch();
// const Data=useSelector((state)=>state.Todo.task);
// const [btnStatus,setBtnStatus]=useState(true);
// const [newid,setNewid]=useState("");

// const handelSubmit=()=>{
//   dispatch (addTask({id:Date.now(),work:task ,status:"uncomplete"}))
// }

// const Delete=(id)=>{
//   dispatch(delTask({id:id}))
// }

// const Edit=()=>{
//   dispatch(editTask({id:newid,work:task}))
//   setBtnStatus(true)
// }
// const EditSave=(id,work)=>{
//   setTask(work)
//   setNewid(id)
//   setBtnStatus(false)

// }
// const complete=(id)=>{
//   dispatch(completeTask({id:id}))
//   setBtnStatus(false)
// }

// const uncomplete=(id)=>{
//   dispatch(UnCompleteTask({id:id}))
//   setBtnStatus(true)
// }


// let sno=0;
// const ans=Data.map((key)=>{
// sno++;
// return(

//   <>
//   <tr>
//     <td>{sno}</td>
//     <td>{key.status=="complete"?(<span style={{color:"red",textDecoration:"line-through"}}>{key.work}</span>):(key.work)}</td>

//     <td><button onClick={()=>{Delete(key.id)}}>Delete</button></td>
//     <td><button onClick={()=>{EditSave(key.id,key.work)}}>Edit</button></td>
//     <td>

//       {key.status=="uncomplete"?(
//       <>
//       <button onClick={()=>{complete(key.id)}}>Complete</button>
//       </>
//       ):(
//         <>
//       <button onClick={()=>{uncomplete(key.id)}}>UnComplete</button>
      
      
//       </>
//       )
//       }

//     </td>
//   </tr>
//   </>
// )
// })

// return(
//   <>
//   <h1>Todo App</h1>
//   <input type="text" value={task}  onChange={(e)=>setTask(e.target.value)} />
//   {btnStatus? <button onClick={handelSubmit}>Add</button>:
//   <button onClick={()=>{Edit()}} >EDitsave</button>}


// <table>

//   <tr>
//     <th>Sno</th>
//     <th>Work</th>
//     <th>Delete</th>
//     <th>Edit</th>
//     <th></th>
//     <th></th>
//   </tr>
//   {ans}
// </table>

//   </>
// )


// }

// export default App;


import Table from 'react-bootstrap/Table';
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTask,delTask,completeTask,UnCompleteTask } from "./todo";

const App = () => {
  const [task,setTask]=useState("")
const Data=useSelector((state)=>state.Todo.task)
const dispatch=useDispatch()
const [btnStatus,setBtnStatus]=useState(true) 
const [newid,setNewid]=useState("")



const handelSubmit=()=>{
  dispatch(addTask({id:Date.now(),work:task}))
}

const Delete=(id)=>{
  dispatch(delTask({id:id}))
}

const complete=(id)=>{
  dispatch(completeTask({id:id}))
  setBtnStatus(false)

}
const uncomplete=(id)=>{
  dispatch(UnCompleteTask({id:id}))
  setBtnStatus(true)
}

let sno=0
const ans =Data.map((key)=>{
  sno++;
  return(
    <>
    <tr>
      <td>{sno}</td>
      <td>{key.status=="complete"?(<span style={{color:"red",textDecoration:"line-through"}}>{key.work}</span>):(key.work)}</td>
      <td><button style={{backgroundColor:"red",color:"white",borderRadius:"5px",border:"none",padding:"5px"}} onClick={()=>{dispatch(delTask({id:key.id}))}}>Delete</button></td>
      <td>
      {key.status=="uncomplete"?(
        <>
        <td><button style={{backgroundColor:"green",color:"white",borderRadius:"5px",border:"none",padding:"5px"}} onClick={()=>{complete(key.id)}}>Complete</button></td>
        </>
      ):(
        <>
        <td><button style={{backgroundColor:"orange",color:"white",borderRadius:"5px",border:"none",padding:"5px"}} onClick={()=>{uncomplete(key.id)}}>UnComplete</button></td>
        </>
      )
      }
      </td>
      <td>
        <button style={{backgroundColor:"orange",color:"white",borderRadius:"5px",border:"none",padding:"5px"}} >Edit</button>
      </td>
    </tr>
    </>
  )
  
})

  return (
    <>
    
    <h1 style={{textAlign:"center",marginBottom:"20px"}}>Todo App</h1>

    
    <input type="text" value={task}  onChange={(e)=>setTask(e.target.value)} style={{width:"20%",height:"30px",marginRight:"5px",padding:"5px",marginLeft:"35%",borderRadius:"5px"}} placeholder='Add Task' />
    <button onClick={handelSubmit} style={{backgroundColor:"green",color:"white",borderRadius:"5px",border:"none",padding:"5px"}}>Add</button>

    <Table striped bordered hover width style={{width:"60%",margin:"auto"}} >
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Delete</th>
          <th>Status</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>



    </>
  );
};

export default App;