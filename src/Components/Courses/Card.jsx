import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>

<section className="course-clip-path-card">

<div className="course-clip-container">
<img src={props.courseImg} />
            <div className="descriptions">
                <h1>{props.courseheading}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum est. Etiam vehicula elit eget turpis faucibus placerat. Nullam mollis neque ut semper accumsan. 
                </p>
    <a className="nav-button item3" style={{transform:`scale(0.8)`,margin:`auto`,width:`50%`,borderColor:`brown`}}>Learn More</a>
            </div>
            </div>
            </section>
    </>
  );
}

export default Card;
