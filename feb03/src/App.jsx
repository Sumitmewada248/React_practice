import { useState,useEffect } from "react";

// const App = () => {
//  const [count,setCount]=useState(0)
   

// useEffect(()=>{
//     setTimeout(()=>{
//         setCount(count+1)
//     },1000)
//     },)


//     return (
//         <>
//         <h1>My Data :{count}</h1>
            
//         </>
//     );
// };

// export default App;



const App = () => {
    const [count,setCount]=useState(0)
    const [multi,setMulti]=useState(0)
      
   
     useEffect(()=>{

        setMulti(count*2)

       
    },[count])

   
   
       return (
           <>
           <h1>My Data :{count}</h1>
           <h1>My Data :{multi}</h1>
           <button onClick={()=>setCount(count+1)}>click</button>
               
           </>
       );
   };
   
   export default App;