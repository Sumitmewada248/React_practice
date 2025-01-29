import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Layout from "./Layout";
import StuHome from "./Pages/stuHome";
import StuAbout from "./Pages/stuAbout";
import StuContact from "./Pages/stuContact";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />}>
      
      <Route path="StuHome" element={<StuHome />} />
      <Route path="StuAbout" element={<StuAbout />} />
      <Route path="StuContact" element={<StuContact />} />

      </Route>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<h1>404</h1>} />

      </Route>
    </Routes>
   

    </BrowserRouter>
    
    </>
  )
}

export default App; 