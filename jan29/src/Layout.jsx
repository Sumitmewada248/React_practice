import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
        <div style={{display:"flex", justifyContent:"space-around",fontSize:"20px",backgroundColor:"blue",height:"50px",alignItems:"center"}}>
        <Link to="home" style={{color:"white",textDecoration:"none"}}>Home |</Link>
        <Link to="about"  style={{color:"white",textDecoration:"none"}}>About |</Link>
        <Link to="contact"  style={{color:"white",textDecoration:"none"}}>Contact |</Link>
        </div>


        <hr size="5" color="red" />
        <Outlet />

        <hr size="5" color="red" />
        <div style={{display:"flex", justifyContent:"center",fontSize:"20px",backgroundColor:"blue",height:"50px",alignItems:"center"}}>
            
            
            
            
            © 2021 www.codegrit.jp</div>
        

        </>
    );
};
export default Layout;