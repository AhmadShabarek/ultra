import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'
const Navbar = () => {
  
  return (
  
    <div className="navbar">
        <div className="container">
    
            <div class="log">
                <h2 class="logo-text">Ultra pofile</h2>
            </div>
            <input type="checkbox" name="" id="nav"/>
            <label for="nav"></label>
            
      
                <ul className="ul-list">
                    <li className="list-item"><Link to="/">Home</Link></li>
                    <li className="list-item"><a href="#">Work</a></li>
                    <li className="list-item"><a href="#">Portfoilo</a></li>
                    <li className="list-item"><a href="#">CV</a></li>
                    <li className="list-item"><a href="#">About</a></li>
                    <li className="list-item"><Link to="/contact">Contact</Link></li>
                </ul>
           

        </div>
    </div>
  );

}
export default Navbar;