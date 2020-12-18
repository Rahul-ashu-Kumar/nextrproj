import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from "../images/logoNextra.png";
import Dropdownm from '../dropdown/Dropdownm';
function Navbar() {
return (
    
<>


<div className="nav-width-full">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/"><img src={logo} alt="logo" /></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" exact to="/service">Service</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
            <Dropdownm/>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</div>
  </> 
  );
}

export default Navbar;