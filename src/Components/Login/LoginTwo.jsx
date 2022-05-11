import './LoginTwo.css'
import {Link} from "react-router-dom"
import React,{useState} from 'react'
import axios from 'axios';


function LoginTwo({setLoginUser}) {
  return (
    <>
    <section className="main-form-section">
    <div className="back-button">

<Link to= "/" className="linking" ><i className="fa-solid fa-house-chimney"></i></Link>
</div>
 
    
   <div className="login-container"> 
   
    <div className="login-form"> 
      <h2>LOGIN TO COURSITY</h2>
      <form action="">
        <div className="inputBx">
          <input type="text" required="required"/>
          <span>Login</span>
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="inputBx password">
          <input id="password-input" type="text" name="password" required="required"/>
          <span>Password</span>
        
          <i className="fas fa-key"></i> 
          
           
        </div>

        
        
        
        <div className="inputSubmit">
          <input type="submit" value="Log in" disabled style={{fontWeight:`600`}}/> 
        </div>
      </form>
      <div className="para-flex"> <p>Forgot password? <a href="#">Click Here</a></p>
      <p>Don't have an account <a href="/signup">Sign up</a></p></div>
      <div className="social-login-icons">
    <i className="fa-brands fa-google"></i>
    <i className="fa-brands fa-github-alt"></i>
    <i className="fa-brands fa-linkedin-in"></i>
    </div>
    </div>
    
  </div>
    
 
</section>
    </>
  )
}

export default LoginTwo