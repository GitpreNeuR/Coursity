import React from 'react'
import './Contact.css'
import PlayerTwo from '../Animations/PlayerTwo'






const Contact = () => {





  return (
    <>

  
   <div className="contact-container">
			<h1 className="contact-heading">contact us</h1>
	
	<div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input" style={{float:`right`}}>
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div className="col-xs-12">
				<div className="btn-lrg submit-btn">Send Message</div>
			</div>
	</div>
</div>

    </>
  )
}

export default Contact