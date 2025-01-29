
import { Link,Outlet } from "react-router-dom";
const About = () => {
    return (
        <>
        <h1>About Page</h1>
        

        <Link to = "StuHome" style={{color:"red",textDecoration:"none",fontSize:"20px"}}>StuHome |</Link>
        <Link to = "StuAbout" style={{color:"red",textDecoration:"none" ,fontSize:"20px"}}>StuAbout |</Link>
        <Link to = "StuContact"style={{color:"red",textDecoration:"none", fontSize:"20px"}}>StuContact |</Link>

<hr />
<Outlet/>
        </>
    );
}
export default About;