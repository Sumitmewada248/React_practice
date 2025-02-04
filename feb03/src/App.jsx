
// const display=(nm)=>{
//   return(
//     alert(`my college name is ${nm}`)

//   )
// }

// const App=()=>{
//   return(
//     <>
//     <h1>Welcome</h1>
//     <button onClick={()=>{display("raja bhoja")}}>click here</button>
//     </>
//   )
// }




// const display=(fnm,snm)=>{
//   return(
//     alert(`my name ${fnm} ${snm}`)

//   )
// }

// const App=()=>{
//   return(
//     <>
//     <h1>Welcome</h1>
//     <button onClick={()=>{display("sachin ","rajput")}}>click here</button>
//     </>
//   )
// }

// export default App





// const display=(fnm,e)=>{
//   return(
//     console.log(e),
//     alert(`my name ${fnm} ,Event Type:${e.type}`)

//   )
// }

// const App=()=>{
//   return(
//     <>
//     <h1>Welcome</h1>
//     <button onClick={(e)=>{display("rajendra",e)}}>click here</button>
//     </>
//   )
// }

// export default App







// const App=()=>{
//   const[name,setNam]=useState("sachin")


//   const mynm=()=>{
//     setNam("rajput")
//   }
  
//   return(
//     <>
//     <h1>My name is :{name}</h1>
//     <button onClick={mynm}>click!!</button>
//     </>favourite
//   )
// }

// export default App



// const App=()=>{
//   const[color,setColor]=useState("red")


  
//   return(
//     <>
//     <h1 style={{color:color}}>My Favourite Color is:{color}</h1>
//     <button onClick={()=>setColor("pink")}>Pink</button><br />
//     <button onClick={()=>setColor("yellow")}>Yellow</button><br />
//     <button onClick={()=>setColor("orange")}>Orange</button><br />
//     </>
//   )
// }

// export default App





// import { useState } from "react"
// import { message } from "antd"
// import Button from 'react-bootstrap/Button';

// const App=()=>{

//   const [count,setCount]=useState(0)


//   const myDec=()=>{
    
//     if(count<=0){
//       message.error("count cannot be less than 0")
   
//     }
//     else{
//       setCount(count-1)
//     }
//   }
//   return(
//     <>
//     <center>   <h1> My Counter App</h1>

//     <Button variant="primary" onClick={()=>{setCount(count+1)}}>Increment</Button>
// <br /><br />
//   <h1>Count:{count}</h1>

// <br /><br />
//     <Button variant="secondary" onClick={myDec}>Decrement</Button>

//     </center>
//     </>
//   )
// }

// export default App

// import { useState } from "react"

// const App = () => {
//   const [name,setName]=useState("")
//   const [city,setCity]=useState("")
  
// const handelSubmit=()=>{
//   const input={name:name ,city:city}
//   console.log(input)
// }

//   return (
// <>


//  Enter Name: <input type="text"value={name} onChange={(e)=>{setName(e.target.value)}}></input><br />
//  Enter City: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}></input><br />
  
// <button onClick={handelSubmit}>Save</button>

// </>

//   )
// }
// export default App


import { useState } from "react"

const App=()=>{

const [data,setData]=useState({
  
})
 const handelSubmit=(e)=>{
  const name=e.target.name
  const value=e.target.value
  setData((values)=>({...values,[name]:value}))
 
 }
 const handelInput=()=>{
   console.log(data)
 }


  return(
    <>


    <h1>Application Form</h1> <br /><br />

   Enter Name : <input type="text" name="name"  onChange={handelSubmit}/><br />
   Enter City : <input type="text" name="city"  onChange={handelSubmit} /><br />
   Enter Email : <input type="email" name="email"   onChange={handelSubmit}/><br />
   
<button onClick={handelInput}>click</button>


    </>
  )
}
export default App