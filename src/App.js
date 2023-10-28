import React from 'react';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About   from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';


function  App(){

return <>
<Router>
<Navbar/>

<Routes>
  <Route  exact path="/home"  element ={<Home/>}/>
  <Route   exact path="/about"  element ={<About/>}/>
  <Route   exact path="/contact"  element ={<Contact/>}/>

</Routes>
</Router>



</>
}
export default App;