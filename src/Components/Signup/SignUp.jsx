import React,{useState} from 'react'
import './SignUp.css'
import {Link} from "react-router-dom"
import axios from 'axios'


function SignUp() {
  


  return (
    <>

<section className="signup-main-form-section">
  <div className="back-button">

  <Link to= "/" className="linking" ><i className="fa-solid fa-house-chimney"></i></Link>
  </div>
 
    
   <div className="signup-container"> 
    <div className="signup-form"> 
      <h2>REGISTER TO COURSITY</h2>
      <form action="">
        <div className="inputBx">
          <input type="text" name="username" required="required"/>
          <span>Username</span>
          <i className="fas fa-user-circle"></i>
        </div>

        <div className="inputBx">
          <input type="email" name="email" required="required"/>
          <span>Email</span>
          <i className=" fas fa-solid fa-envelope"></i>        </div>

        <div className="inputBx">
          <input type="text" name="age" required="required" min="15" max="60" />
          <span>Age</span>
          <i className="fas fa-user-circle"></i>
        </div>

        <div className="inputBx">
          <input type="text" name="gender" required="required"/>
          <span>Gender</span>
          <i className="fas fa-user-circle"></i>
        </div>

        <div className="inputBx">
          <input type="adress" name="address" required="required"/>
          <span>Address</span>
          <i className="fas fa-solid fa-house"></i>        </div>

        <div className="inputBx password">
          <input type="password-input" name="password"  required="required"/>
          <span>Password</span>
          <i className="fas fa-key"></i> 
        </div>


        <div className="inputBx password">
          <input id="password-input" name="confirm" required="required"/>
          <span>Confirm Password</span>
        
          <i className="fas fa-key"></i> 
          
           
        </div>

        

        
        
        
        <div className="inputSubmit">
          <input type="submit" value="Sign-Up" disabled style={{fontWeight:`600`}}/> 
        </div>
      </form>
      <div className="signup-para-flex"> 
      <p>Already have an account? <a href="login">Login</a></p></div>
      <div className="signup-social-login-icons">
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

export default SignUp