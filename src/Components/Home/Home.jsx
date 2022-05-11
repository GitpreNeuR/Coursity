import React, { useEffect } from 'react'
import './Home.css'
import Aos from 'aos'
import "aos/dist/aos.css";
import More from '../Images/more.png'


import PlayerOne from '../Animations/PlayerOne'
import myVideo from "../Images/aboutBg.mp4"
function Home() {
useEffect(()=>{

    Aos.init({
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
      });
})

  return (
    <>
    <header>
        <div className="container header-container">
            <div className="header-left">
                <h1 className="header-left-heading">
                    Grow your Skills to advance your career
                </h1>
                <p className="header-left-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates asperiores et praesentium odio neque repellendus unde odit. Officia sapiente nihil dicta assumenda autem omnis explicabo culpa laborum a cm!</p>
                <a className="nav-button item3"
                style={{width:`45%`,margin:`auto`}}
                href="">Learn More</a>
            </div>
            
            <div className="header-right">
               
                    <PlayerOne />
                
            </div>
        </div>
    </header>




     {/*--------------CATEGORIES-------------- */}
     <section className="categories">
        <div className="container category-container">
          <div className="category-left">
            <h1 className="category-title">Categories</h1>
            <p className="category-para" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              non! Dicta, dignissimos eveniet voluptates a hic neque voluptas
              odio accusantium dolores ratione, facilis asperiores nulla labore
              quas obcaecati ut quis. Quasi, saepe! Quod, eos.
            </p>
            <a href="/" className="category-button" style={{borderColor:`brown`}} >
              Learn more
            </a>
          </div>
          <div className="category-right">
            <article className="category" >
              <span className="category-icon">
                <i className="fa-brands fa-bitcoin"></i>
              </span>
              <h5 className="span-heading">Blockchain</h5>
              <p className="span-para" >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                omnis ipsa totam ea rerum soluta?
              </p>
            </article>
            <article className="category">
              <span className="category-icon">
              <i className="fa-solid fa-computer"></i>              </span>
              <h5 className="span-heading">Computer Science</h5>
              <p className="span-para" >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                omnis ipsa totam ea rerum soluta?
              </p>
            </article>
            <article className="category">
              <span className="category-icon">
              <i className="fa-solid fa-money-bill-trend-up"></i>              </span>
              <h5 className="span-heading" >Marketing</h5>
              <p className="span-para" >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                omnis ipsa totam ea rerum soluta?
              </p>
            </article>
            <article className="category">
              <span className="category-icon">
              <i className="fa-solid fa-money-bill-trend-up"></i>              </span>

              <h5 className="span-heading" >I.O.T</h5>
              <p className="span-para" >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                omnis ipsa totam ea rerum soluta?
              </p>
            </article>
            <article className="category">
              <span className="category-icon">
                <i className="fa-brands fa-bitcoin"></i>
              </span>
              
              <h5 className="span-heading" >Blockchain</h5>
              <p className="span-para" >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                omnis ipsa totam ea rerum soluta?
              </p>
            </article>

            <article className="category">
              <span className="category-icon">
                <i className="fa-brands fa-bitcoin"></i>
              </span>
              <h5 className="span-heading" >Blockchain</h5>
              <p className="span-para" >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                omnis ipsa totam ea rerum soluta?
              </p>
            </article>
          </div>
        </div>
      </section>




      {/*------------------VIDEO---------------- */}
      <div className="video-div" style={{position:`relative`,top:`30em`}}>
      <div className="video-text">
<div className="video-container" style={{overflow:`hidden`}}>
<video src={myVideo} autoPlay={true} muted={true} loop={true}  type="video/mp4" height="100%" width="100%"/>        


</div>
<div className="overlay-text">
	<h2>OUR VISION</h2>
	<h1>We envision a world where anyone, anywhere has the power to transform their life through learning.</h1>
</div>
</div>
</div>



{/* -----------------AOS SCROLLING ------------------*/}

<section className="aos-scrolling">
   
<div className="scroll-one" data-aos="fade-up">
        <div className="scroll-image"><img src="" /></div>
        <h1>Heading</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nulla, mollitia expedita quibusdam cum placeat ipsam veritatis tenetur aperiam, nesciunt nostrum temporibus id officiis. Sint maxime eveniet ipsum ex voluptatum eius id voluptate temporibus maiores enim nisi, rem ducimus perferendis quibusdam cupiditate vero mollitia quidem quo recusandae iure nam consectetur magnam corrupti dolore. Sequi illo magnam voluptate eveniet odit reprehenderit.</p>
    </div>

    <div className="scroll-one" data-aos="fade-right">
        <div className="scroll-image"><img src="" /></div>
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nulla, mollitia expedita quibusdam cum placeat ipsam veritatis tenetur aperiam, nesciunt nostrum temporibus id officiis. Sint maxime eveniet ipsum ex voluptatum eius id voluptate temporibus maiores enim nisi, rem ducimus perferendis quibusdam cupiditate vero mollitia quidem quo recusandae iure nam consectetur magnam corrupti dolore. Sequi illo magnam voluptate eveniet odit reprehenderit.</p>
    </div>

    <div className="scroll-one" data-aos="fade-up">
        <div className="scroll-image"><img src="" /></div>
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nulla, mollitia expedita quibusdam cum placeat ipsam veritatis tenetur aperiam, nesciunt nostrum temporibus id officiis. Sint maxime eveniet ipsum ex voluptatum eius id voluptate temporibus maiores enim nisi, rem ducimus perferendis quibusdam cupiditate vero mollitia quidem quo recusandae iure nam consectetur magnam corrupti dolore. Sequi illo magnam voluptate eveniet odit reprehenderit.</p>
    </div>

    <div className="scroll-one" data-aos="fade-left">
        <div className="scroll-image"><img src="" /></div>
        <h1>Heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nulla, mollitia expedita quibusdam cum placeat ipsam veritatis tenetur aperiam, nesciunt nostrum temporibus id officiis. Sint maxime eveniet ipsum ex voluptatum eius id voluptate temporibus maiores enim nisi, rem ducimus perferendis quibusdam cupiditate vero mollitia quidem quo recusandae iure nam consectetur magnam corrupti dolore. Sequi illo magnam voluptate eveniet odit reprehenderit.</p>
    </div>
</section>


<section className="main-clip">
    <h1 className="clip-heading">Our Popular Courses</h1>

<section className="clip-path-card">

<div className="clip-container">
<img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg"/>
            <div className="descriptions">
                <h1>Full-Stack Web Development</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                </p>
    <a className="nav-button item3" style={{transform:`scale(0.8)`,margin:`auto`,width:`50%`}}>Learn More</a>
            </div>
            </div>

            <div className="clip-container">
<img src="https://wallpapercave.com/dwp1x/wp4048626.jpg"/>
            <div className="descriptions">
                <h1>Full Stack Java Development</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                </p>
                <a className="nav-button item3" style={{transform:`scale(0.8)`,margin:`auto`,width:`50%`}}>Learn More</a>
            </div>
            </div>

            <div className="clip-container">
<img src="https://cdn.pixabay.com/photo/2016/11/07/12/08/cyber-security-1805632_960_720.png"/>
            <div className="descriptions">
                <h1>Cyber Security</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                </p>
                <a className="nav-button item3" style={{transform:`scale(0.8)`,margin:`auto`,width:`50%`}}>Learn More</a>
            </div>
            </div>

            <div className="clip-container">
<img src="https://cdn.pixabay.com/photo/2017/06/14/16/20/network-2402637_960_720.jpg"/>
            <div className="descriptions">
                <h1>Data Science</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                </p>
                <a className="nav-button item3" style={{transform:`scale(0.8)`,margin:`auto`,width:`50%`}}>Learn More</a>
            </div>
            </div>

            <div className="clip-container">
<img src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_960_720.jpg"/>
            <div className="descriptions">
                <h1>Digital Marketing</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                </p>
                <a className="nav-button item3" style={{transform:`scale(0.8)`,margin:`auto`,width:`50%`}}>Learn More</a>
            </div>
            </div>

            <div className="clip-container">
<img src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_960_720.jpg"/>
            <div className="descriptions">
                <h1>Management</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                </p>
                <a className="nav-button item3" style={{transform:`scale(0.8)`,margin:`auto`,width:`50%`}}>Learn More</a>
            </div>
            </div>



            </section>


    </section>

    <div className="more-image">
		<img src={More} style={{borderRadius:`0px`,position:'relative',height:`100%`,right:`-15px`,marginBottom:`13em`}} />
	</div>



{/*------------------LOGO SLIDER-------------------- */}

    </>
  )
}

export default Home