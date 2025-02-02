
import { Link,Outlet } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Layout = () => {
    return (
        <>
             <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/home"> <Nav.Link>Home</Nav.Link></Link> 
            <Link to="/about"> <Nav.Link>About</Nav.Link></Link>
            <Link to="/product"> <Nav.Link>Product</Nav.Link></Link>    
            <Link to="/contact"> <Nav.Link>Contact</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>


<Outlet/>

        </>
    )}
        export default Layout;