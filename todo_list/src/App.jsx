
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask,delTask,editTask,completeTask,UnCompleteTask } from "./todo";


const App=()=>{
const [task,setTask]=useState("");
const dispatch=useDispatch();
const Data=useSelector((state)=>state.Todo.task);
const [btnStatus,setBtnStatus]=useState(true);
const [newid,setNewid]=useState("");

const handelSubmit=()=>{
  dispatch (addTask({id:Date.now(),work:task ,status:"uncomplete"}))
}

const Delete=(id)=>{
  dispatch(delTask({id:id}))
}

const Edit=()=>{
  dispatch(editTask({id:newid,work:task}))
  setBtnStatus(true)
}
const EditSave=(id,work)=>{
  setTask(work)
  setNewid(id)
  setBtnStatus(false)

}
const complete=(id)=>{
  dispatch(completeTask({id:id}))
  setBtnStatus(false)
}

const uncomplete=(id)=>{
  dispatch(UnCompleteTask({id:id}))
  setBtnStatus(true)
}


let sno=0;
const ans=Data.map((key)=>{
sno++;
return(

  <>
  <tr>
    <td>{sno}</td>
    <td>{key.status=="complete"?(<span style={{color:"red",textDecoration:"line-through"}}>{key.work}</span>):(key.work)}</td>

    <td><button onClick={()=>{Delete(key.id)}}>Delete</button></td>
    <td><button onClick={()=>{EditSave(key.id,key.work)}}>Edit</button></td>
    <td>

      {key.status=="uncomplete"?(
      <>
      <button onClick={()=>{complete(key.id)}}>Complete</button>
      </>
      ):(
        <>
      <button onClick={()=>{uncomplete(key.id)}}>UnComplete</button>
      
      
      </>
      )
      }

    </td>
  </tr>
  </>
)
})

return(
  <>
  <h1>Todo App</h1>
  <input type="text" value={task}  onChange={(e)=>setTask(e.target.value)} />
  {btnStatus? <button onClick={handelSubmit}>Add</button>:
  <button onClick={()=>{Edit()}} >EDitsave</button>}


<table>

  <tr>
    <th>Sno</th>
    <th>Work</th>
    <th>Delete</th>
    <th>Edit</th>
    <th></th>
    <th></th>
  </tr>
  {ans}
</table>

  </>
)


}

export default App;