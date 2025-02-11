
import { increment,decrement } from "./counterSlice"
import { useDispatch,useSelector } from "react-redux"
const App=()=>{

const count=useSelector((state)=>state.counter.count)
const dispatch=useDispatch()

  return(
    <>
    <div className="container">

    <h1 className="heading">Counter App</h1>

    <button className="btn" onClick={()=>{dispatch(increment())}}>Increment</button>

    <h1 className="count">{count}</h1>

    <button className="btn" onClick={()=>{dispatch(decrement())}}>Decrement</button>

    </div>

    <style>{`
    .container{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:1rem;
        border:3px solid black;
        width:30%;
    }
    .heading{
        color:red;
    }
    .btn{
        padding:15px;
        border-radius:5px;
    }
    .btn:nth-child(2){
        background-color:green;
        color:white;
    }
    .btn:nth-child(4){
        background-color:red;
        color:white;
    }
    .count{
        font-size:40px;
    }
    `}</style>
    </>
  )
}
export default App


