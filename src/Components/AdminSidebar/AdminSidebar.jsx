import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {AdminSidebarData} from './AdminSidebarData';
import './AdminSidebar.css';
import { IconContext } from 'react-icons';

function AdminSidebar() {
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
        
           
            {AdminSidebarData.map((item, index) => {
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

export default AdminSidebar;