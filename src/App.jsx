import './App.scss';
import { Route, Routes } from "react-router-dom"
import Layout from "../src/Componants/Layout/Layout"
import Home from "../src/Componants/Home/Home"
import About from "../src/Componants/About/About"
import Contact from "../src/Componants/Contact/Contact"


function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route  index element={<Home/>}/>
      <Route  path="about" element={<About/>}/>
      <Route  path="contact" element={<Contact/>}/>
    </Route>
   </Routes>
   </>
  );
}

export default App;
