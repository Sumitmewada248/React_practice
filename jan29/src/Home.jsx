import { Link,Outlet } from "react-router-dom";


const Home = () => {
    return (
        <>
        <h1> This is Home</h1>
       <Link to = "StuHome" style={{color:"red",textDecoration:"none",fontSize:"20px"}}>StuHome |</Link>
        <Link to = "StuAbout" style={{color:"red",textDecoration:"none" ,fontSize:"20px"}}>StuAbout |</Link>
        <Link to = "StuContact"style={{color:"red",textDecoration:"none", fontSize:"20px"}}>StuContact |</Link>
 
<hr />
<Outlet />
        </>
    );
}
export default Home;