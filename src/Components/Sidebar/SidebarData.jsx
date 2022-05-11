import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/dashboard/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Courses',
    path: '/dashboard/your-courses',
    icon: <FaIcons.FaBookOpen />,
    cName: 'nav-text'
  },
  
  {
    title: 'Notes',
    path: '/dashboard/notes',
    icon: <FaIcons.FaStickyNote />,
    cName: 'nav-text'
  },
  
  {
    title: 'Logout',
    path: '/',
    icon: <IoIcons.IoMdLogOut />,
    cName: 'nav-text'
  }
];