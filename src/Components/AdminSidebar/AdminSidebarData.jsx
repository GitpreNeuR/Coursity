import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const AdminSidebarData = [
  {
    title: 'Profile',
    path: '/admin/profile',
    icon: <AiIcons.AiFillProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Add Student',
    path: '/admin/add-student',
    icon: <IoIcons.IoIosPeople />,
    cName: 'nav-text'
  },
  {
    title: 'View Trainer',
    path: '/admin/view-trainer',
    icon: <FaIcons.FaUserPlus />,
    cName: 'nav-text'
  },
  
  {
    title: 'View Students',
    path: '/admin/view-students',
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