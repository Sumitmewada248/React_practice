import { useSelector,useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";


const App = () => { 
const count=useSelector((state)=>state.Counter.count);
 const diaspatch=useDispatch();

  return(
    <>


    <h1>Counter Programe</h1>
  <button onClick={()=>diaspatch(increment())}> Increment</button>
  
  <h1>{count}</h1>
    <button onClick={()=>diaspatch(decrement())}>Decrement</button>
     
    </>
  )

}
export default App;