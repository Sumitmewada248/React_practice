// import { increment, decrement, colorChange } from "./counterSlice";
// import { useDispatch, useSelector } from "react-redux";

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const color = useSelector((state) => state.counter.color);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <center>
//         <div className="container">
//           <h1 className="heading">Counter App</h1>
//           <button className="btn" onClick={() => dispatch(increment())}>
//             Increment
//           </button>
//           <h1 className="count">{count}</h1>
//           <button className="btn" onClick={() => dispatch(decrement())}>
//             Decrement
//           </button>
//         </div>
//         <br />
//         <br />
//         <br />
//         Color Change App
//         <br />
//         <button onClick={() => dispatch(colorChange())}>click here</button>
//         <br />
//         <br />
//         <div
//           style={{ width: "200px", height: "200px", background: color }}
//         ></div>
//       </center>
//       <style>{`
//         .container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 1rem;
//           border: 3px solid black;
//           width: 30%;
//         }
//         .heading {
//           color: red;
//         }
//         .btn {
//           padding: 15px;
//           border-radius: 5px;
//         }
//         .btn:nth-child(2) {
//           background-color: green;
//           color: white;
//         }
//         .btn:nth-child(4) {
//           background-color: red;
//           color: white;
//         }
//         .count {
//           font-size: 40px;
//         }
//       `}</style>
//     </>
//   );
// };

// export default App;


import { useDispatch,useSelector } from "react-redux";
import { increment,decrement,bgcolor } from "./counterSlice";


const App=()=>{
const count=useSelector((state)=> state.counter.count)

const color=useSelector((state)=>state.counter.color)

const dispatch=useDispatch();


  return(
<>

<h1>Counter App</h1>
<button onClick={()=>{dispatch(increment())}}>increment</button>

<h1>{count}</h1>

<button onClick={()=>{dispatch(decrement())}}>decrement</button>

<br /><br />

<h1>Color App</h1>

<button onClick={()=>{dispatch(bgcolor())}}>click here</button>

<div style={{width:"200px",height:"150px",border:"1px solid black",backgroundColor:color}}></div>

</>

  )
}
export default App