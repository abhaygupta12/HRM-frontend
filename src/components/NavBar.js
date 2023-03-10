import React from "react";

import './NavBar.css';
import  { Link }  from "react-router-dom";

const NavBar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper brown">
          <Link to="/home" className="brand-logo">Smart Health</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
           </ul>
        </div>
      </nav>
    );
}
export default NavBar