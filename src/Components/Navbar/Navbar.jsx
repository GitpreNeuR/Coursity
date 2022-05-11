import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <a className="nav-link" href="/">
            <h2 className="heading">COURSITY</h2>
          </a>

          <ul className="navbar-menu-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            
           
            <li>
              <a href="/role-page">Role</a>
            </li>
            
          </ul>
          {/*<div className="container-search ">
  <input type="text" placeholder="Search Courses...." />
  <div className="search "></div>
  </div>*/}

          <a className="nav-button item3" href="/signup">
            Login / Register
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
