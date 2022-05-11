import React from "react";
import "./NavbarStudent.css";

function NavbarStudent() {
  return (
    <>
      <nav>
        <div className="nav-container">
          
          <ul className="nav-menu-list">
           
            <li>
              <a href="/about-us">About</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            
            
          </ul>
          {/*<div className="container-search ">
  <input type="text" placeholder="Search Courses...." />
  <div className="search "></div>
  </div>*/}

          
        </div>
      </nav>
    </>
  );
}

export default NavbarStudent;
