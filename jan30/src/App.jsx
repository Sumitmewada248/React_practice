// import College from "./College";
// import Student from "./Student";
// const name= "Sanjay"
// const rno="152"
// const coll="IIT"
// const fees="50000"

// const App=()=>{
//   return(
//     <>
//     <h1>Welcome</h1>
//     <Student name={name} rno={rno} clg={coll} fee={fees}/>
//     </>
//   )
// }
// export default App;/


const Data=["ravi","kumar","suresh","ramesh","rajesh"]
const ans=Data.map((name)=>{
  return(
    <li>{name}</li>
  )
})

const App = () => {   
  return (
    <>
      <h1> Welcome to the App </h1>
      <ol>
      {ans}
      </ol>
     
      
    </>
  );
}
export default App;