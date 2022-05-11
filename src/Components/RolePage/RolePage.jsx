import React from 'react'
import './RolePage.css'
import AsStudent from '../Animations/AsStudent'
import AsAdmin from '../Animations/AsAdmin'
import AsInstructor from '../Animations/AsInstructor'
import {NavLink} from "react-router-dom"

function RolePage() {
  return (
    <>
            <h1 className="role-heading">Choose Your Role</h1>
    <div className="roles-container">
        <div className="roles-card">
            <div className="role-card-player">
            <AsStudent/>

            </div>
            <button className="nav-button item3" type="button"  style={{margin:`6em auto auto 8.5em`,
        borderRadius:`10px`,boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`}}><NavLink to='/dashboard/profile' style={{textDecoration:`none`,color:`#df6a11`}}>Continue as Student</NavLink></button>
        </div>

        <div className="roles-card">
        <div className="role-card-player">
            <AsAdmin/>

            </div>
            <button className="nav-button item3" type="button"  style={{margin:`6em auto auto 8.5em`,
        borderRadius:`10px`,boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`}}><NavLink to='/admin/profile' style={{textDecoration:`none`,color:`#df6a11`}}>Continue as Admin</NavLink></button>

        </div>

        <div className="roles-card">
        <div className="role-card-player">
            <AsInstructor/>

            </div>
            <button className="nav-button item3" type="button"  style={{margin:`6em auto auto 8.5em`,
        borderRadius:`10px`,boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`}}><NavLink to='/instructor/profile' style={{textDecoration:`none`,color:`#df6a11`}}>Continue as Instructor</NavLink></button>
            </div>
    
    </div>
    </>
  )
}

export default RolePage