// import College from "./College";
// import Student from "./Student";
// const name= "Sanjay"
// const rno="152"
// const coll="IIT"
// const fees="50000"

import EmpDesign from "./EmpDesign"

// const App=()=>{
//   return(
//     <>
//     <h1>Welcome</h1>
//     <Student name={name} rno={rno} clg={coll} fee={fees}/>
//     </>
//   )
// }
// export default App;/


// const StuData=[
// {
//   "rollno":1,
//   "name":"Sanjay",
//   "subject":"Maths",
//   "fees":50000
// },

// {
//   "rollno":2,
//   "name":"Rahul",
//   "subject":"Science",
//   "fees":50000
// },

// {
//   "rollno":3,
//   "name":"Rohit",
//   "subject":"English",
//   "fees":50000
// },

// {
//   "rollno":4,
//   "name":"Raj",
//   "subject":"Hindi",
//   "fees":50000
// }

// ]

// console.log(StuData[2].subject)// used for console the data at any object
// const ans=StuData.map((data)=>{
//   return (
//     <>
//     <tr>
//       <td>{data.rollno}</td>
//       <td>{data.name}</td>
//       <td>{data.subject}</td>
//       <td>{data.fees}</td>
//     </tr>
//     </>
//   )
// })


// const App = () => {   
//   return (
//     <>
//       <h1> Welcome to the App </h1>
//    <table border={2} width={300}>
//     <tr>
//       <th>Rollno</th>
//       <th>Name</th>
//       <th>Subject</th>
//       <th>Fees</th>
//     </tr>
//     {ans}
//    </table>
     
      
//     </>
//   );
// }
// export default App;





// import EmpDesign from "./EmpDesign";
// import EmpData from "./EmpData";
// const App = () => {
// const ans=EmpData.map((data)=> <EmpDesign
//      name={data.name}  rollno={data.rollno} designation={data.designation}  salary={data.salary}/>
    

// )


//   return (
//     <>
//       <h1> Welcome to the App </h1>
//       <table border={2} width={500} align="center" style={{textAlign:"center"}}>
//         <tr bgcolor="yellow">
//           <th>ID No</th>
//           <th>Name</th>
//           <th>Designation</th>
//           <th>Salary</th>
//         </tr>
//         {ans}
//       </table>
//     </>
//   );
// }
// export default App;

// const App=()=>{
//   return(
//     <>
//     <div style={{width:"300px",border:"1px solid black",margin:"auto",padding:"10px",textAlign:"center",height:"150px",backgroundColor:"lightblue",borderRadius:"20px",marginTop:"300px"}}>
//       <div style={{border:"1px solid red",width:"250px",textAlign:"center",margin:"auto",height:"90px",paddingTop:"20px",backgroundColor:"yellow",borderRadius:"20px",marginTop:"20px"}}><h3 style={{marginTop:"30px",fontSize:"25px"}}>CYBROM</h3></div>
//     </div>
//     </>
//   )
// }
// export default App;

// import EmpData from "./EmpData"
// import EmpDesign from "./EmpDesign"

// const App=()=>{
  
//   const ans=EmpData.map((key)=><EmpDesign
//   name={key.name} rollno={key.rollno} designation={key.designation} salary={key.salary}/>
//   )

//   return(

//     <>
//     <h1>React App</h1>

//     <table border={2}>
//       <tr>
//         <th>ID</th>
//         <th>Name</th>
//         <th>Designation</th>
//         <th>salary</th>
//       </tr>
//       {ans}
//     </table>
//     </>

//   )

// }

// export default App

import EmpData from "./EmpData"



const App=()=>{

  const ans=EmpData.map((key)=><EmpDesign
  rollno={key.rollno} name={key.name}  designation={key.designation} salary={key.salary}/>
  
  )

  return(
   <>
   <h1>React App</h1>
   <table border={2}>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Designation</th>
      <th>Salary</th>
    </tr>
    {ans}
   </table>
   
   </>

  )
}
export default App