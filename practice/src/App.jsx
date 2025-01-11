import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTask,deleteTask,editTask } from "./todo";

const App=()=>{
const [task,setTask]=useState("");
const Data=useSelector((state)=>state.todo.task);
const dispatch=useDispatch();
const [newid,setNewid]=useState("");
const [btnStatus,setBtnStatus]=useState(true);


const handelSubmit=()=>{
  dispatch(addTask({id:Date.now(),work:task}))
}


const Edit=()=>{
  dispatch(editTask({id:newid,work:task}))
  setBtnStatus(true)
}

const editSave=(id,work)=>{
setTask(task)
setBtnStatus(false)
setNewid(id)

}

const Delete=(id)=>{
  dispatch(deleteTask({id:id}))

}


let sno=0;
const ans=Data.map((key)=>{
  sno++;
  return(
    <>
    <tr>
      <td>{sno}</td>
      <td>{key.work}</td>
      <td><button onClick={()=>{Delete(key.id)}}>Delete</button></td>
      <td><button onClick={()=>{editSave(key.id,key.work)}}>Edit</button></td>
      </tr>
    
    </>
  )
})

return(


  <>
  <h1>Todo APP</h1>

  <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
 {btnStatus? <button onClick={handelSubmit}>Add</button>:
 <button onClick={()=>{Edit()}}>Editsave</button>}

  <table>
    <tr>
      <th>Sno</th>
      <th>Task</th>
      <th>Delete</th>
      <th>Edit</th>
      <th></th>
      
    </tr>
    {ans}
  </table>
  
  </>
)

}

export default App;