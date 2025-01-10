import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { increment, decrement } from "./CounterSlice.jsx";


const App = () => {
const dispatch = useDispatch();
const count = useSelector((state) => state.Counter.count);




return(

<>

<h1>Counter Program</h1>

<button onClick={()=>dispatch(increment())}>increment</button>
<h1>{count}</h1>

<button onClick={()=>dispatch(decrement())}>decrement</button>

</>



)

}

export default App; 
