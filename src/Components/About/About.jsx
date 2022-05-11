import React,{useEffect} from 'react'
import './About.css'
import myVideo from '../Images/aboutBg.mp4'
import TeamPlayer from '../Animations/TeamPlayer'
import Aos from 'aos'
import "aos/dist/aos.css";


function About () {

	useEffect(()=>{

		Aos.init({
			offset: 400, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 1000 // values from 0 to 3000, with step 50ms
		  });
	})

  return (
<>
	<div className="about-body">
    <div className="video-text">
<div className="video-container">
<video src={myVideo} autoplay="" muted={true} loop={true}  type="video/mp4" height="100%" width="100%"/>        


</div>
<div className="overlay-text">
	<h2>OUR VISION</h2>
	<h1>We envision a world where anyone, anywhere has the power to transform their life through learning.</h1>
</div>
</div>

{/*-----------------OUR STORY------------ */}
<div className="origin-story-container" data-aos="zoom-in">
                <h1 className="text-center">
                    Origin Story
                </h1>
                <p>
                    While doing research work for their PhDs from the University of Auckland in 2014, our founders came across one of the API industry's pain points: SDKs. They realized that API providers who spent hundreds of thousands of dollars every year on improving developer experience, by providing SDKs and user-friendly documentation were able to reach a wider developer audience for their APIs compared to API providers who weren't able to do so.
                </p>
				<br/>
				<br/>
				<br/>
                <p>
                    It was so clear that even though writing SDKs and documentation was a difficult and expensive task, it followed repeatable patterns which could be defined as logic blocks in a code generation engine. So, as a research project, they started working on a code generation engine which dynamically generated SDKs using API description as input.
                </p>
				<br/><br/>
				<br/>
                <p>
                    After a rigorous journey, this research project was selected as a candidate for commercialization by Return on Science (a NZ national research commercialization program focused on bringing new academic research to market) and the concept was transformed into a product i.e. APIMatic.
                </p>
            </div>





{/*------------------TEAM SECTION------------- */}

<section className="section-team">
	<div className="team-player" data-aos="zoom-in">
	<TeamPlayer loop={false} />

	</div>
<h1 className="team-title">MEET OUR TEAM</h1>

		<div className="about-container">
			
				<div className="info-container">
					<div className="single-person">
						<div className="person-image">
							<img src="https://i.ibb.co/G2CBWvb/person1.jpg" alt=""/>
							<span className="about-icon">
								<i className="fab fa-html5"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">John Doe</h3>
							<span className="speciality">Web Developer</span>
						</div>
					</div>
				</div>
				
				<div className="info-container">
					<div className="single-person">
						<div className="person-image">
							<img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt=""/>
							<span className="about-icon">
								<i className="fab fa-wordpress-simple"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Robert Smith</h3>
							<span className="speciality">WordPress Developer</span>
						</div>
					</div>
				</div>
				
				<div className="info-container">
					<div className="single-person">
						<div className="person-image">
							<img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt=""/>
							<span className="about-icon">
								<i className="fab fa-wordpress-simple"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Robert Smith</h3>
							<span className="speciality">WordPress Developer</span>
						</div>
					</div>
				</div>
				
				<div className="info-container">
					<div className="single-person">
						<div className="person-image">
							<img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt=""/>
							<span className="about-icon">
								<i className="fab fa-wordpress-simple"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Robert Smith</h3>
							<span className="speciality">WordPress Developer</span>
						</div>
					</div>
				</div>
				
				<div className="info-container">
					<div className="single-person">
						<div className="person-image">
							<img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt=""/>
							<span className="about-icon">
								<i className="fab fa-wordpress-simple"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Robert Smith</h3>
							<span className="speciality">WordPress Developer</span>
						</div>
					</div>
				</div>
				
				<div className="info-container">
					<div className="single-person">
						<div className="person-image">
							<img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt=""/>
							<span className="about-icon">
								<i className="fab fa-wordpress-simple"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Robert Smith</h3>
							<span className="speciality">WordPress Developer</span>
						</div>
					</div>
				</div>
				
				<div className="info-container">
					<div className="single-person">
						<div className="person-image">
							<img src="https://i.ibb.co/25zdRMr/person3.jpg" alt=""/>
							<span className="about-icon">
								<i className="fab fa-angular"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">John Doe</h3>
							<span className="speciality">Angular Developer</span>
						</div>
					</div>
				</div>
				
				
				<div className="info-container">
					<div className="single-person">
						<div className="person-image">
							<img src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt=""/>
							<span className="about-icon">
								<i className="fab fa-js"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">John Smith</h3>
							<span className="speciality">Javascript Developer</span>
						</div>
					</div>
				</div>
				
			</div>
		
	</section>

	
	
	</div>
	



    </>
  )
}

export default About