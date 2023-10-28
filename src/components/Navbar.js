import React from 'react';
import  {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div>
   <div className='flex' style={{display:'flex', justifyContent:'space-between', width:'70%',alignItems:'center', textAlig:'center'}}>
     <Link to="/home">Home</Link>    
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>

     </div>

    </div>
  );
};

export default Navbar;
