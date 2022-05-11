import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
   <>
  <footer>
  <section className="ft-main">
    <div className="ft-main-item">
      <h2 className="ft-title">About</h2>
      <ul>
        <li><a href="#">Services</a></li>
        <li><a href="#">Get App</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Customers</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div className="ft-main-item">
      <h2 className="ft-title">Terms</h2>
      <ul>
        <li><a href="#">Cookie settings</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Sitemap</a></li>
        <li><a href="#">Accessibility Statements</a></li>
      </ul>
    </div>
    <div className="ft-main-item">
      <h2 className="ft-title">Contact</h2>
      <ul>
        <li><a href="#">Help</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Advertise</a></li>
      </ul>
    </div>
    <div className="ft-main-item">
      <h2 className="ft-title">Stay Updated</h2>
      <p>Get free updates before others do!</p>
      <form>
        <input type="email" name="email" placeholder="Enter email address"/>
      </form>
    </div>
  </section>

  <section className="ft-social">
    <ul className="ft-social-list">
      <li><a href="#"><i className="fab fa-facebook"></i></a></li>
      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
      <li><a href="#"><i className="fab fa-github"></i></a></li>
      <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
      <li><a href="#"><i className="fab fa-youtube"></i></a></li>
    </ul>
  </section>

  <section className="ft-legal">
    <ul className="ft-legal-list">
      <li><a href="#">Terms &amp; Conditions</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li>&copy; 2022 by Coursity </li>
    </ul>
  </section>
</footer>

   </>
  )
}

export default Footer