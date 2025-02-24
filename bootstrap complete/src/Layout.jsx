
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
            <Nav.Link as={Link} to={"home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"product"}>Product</Nav.Link>
            <Nav.Link as={Link} to={"contact"}>Contact</Nav.Link>

          </Nav>
        </Container>
      </Navbar>


<Outlet/>


<hr />
<div id="footer">
www.mywebpage .com &copy; 2021  All Rights Reserved

</div>
        </>
    )}
        export default Layout;