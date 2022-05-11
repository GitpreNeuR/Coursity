import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {InstructorSidebarData} from './InstructorSidebarData';
import './InstructorSidebar.css';
import { IconContext } from 'react-icons';

function InstructorSidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
      
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        
          <ul className='nav-menu-items' onClick={showSidebar}>
          <div className='navbar-bar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        
           
            {InstructorSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={()=>{
                  window.location.pathname=item.path;
                }}>
                  <Link to={item.path} style={{fontSize:`1.3em`}}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default InstructorSidebar;