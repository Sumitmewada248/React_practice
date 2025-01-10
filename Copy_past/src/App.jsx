import Layout from "./Layout";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/Theme changes";
import Contact from "./Pages/Contact";
import Todolist from "./Pages/Todolist";
import CounterApp from "./Pages/Counter App";


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
<Route path="/"element={<Layout/>}>
<Route path="/Home" element={<Home/>}></Route>
<Route path="/CounterApp" element={<CounterApp/>}></Route>
<Route path="/About" element={<About/>}></Route>
<Route path="/Contact" element={<Contact/>}></Route>
<Route path="/Todolist" element={<Todolist/>}></Route>





</Route>

    </Routes>
    </BrowserRouter>
    
    <h1></h1>
    </>
  )
}
export default App;
