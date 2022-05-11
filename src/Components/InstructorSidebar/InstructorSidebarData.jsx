import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const InstructorSidebarData = [
  {
    title: 'Profile',
    path: '/instructor/profile',
    icon: <AiIcons.AiFillProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Manage',
    path: '/instructor/manage',
    icon: <IoIcons.IoIosPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/instructor/messages',
    icon: <FaIcons.FaEnvelope />,
    cName: 'nav-text'
  },
  
  {
    title: 'View Students',
    path: '/instructor/view-students',
    icon: <FaIcons.FaUserFriends />,
    cName: 'nav-text'
  },
  
  {
    title: 'Logout',
    path: '/',
    icon: <IoIcons.IoMdLogOut />,
    cName: 'nav-text'
  }
];