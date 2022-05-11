import React from 'react'
import './Cards.css'
function Cards(props) {
  return (
    <>
    <div className="your-course">
  <div className="your-course-img">
    <img src={props.courseImage} />
    
  </div>
  <div className="course-card">
    <div className="your-course-info">
      <h1>{props.courseTitle}</h1>
      <div className="move">
        <i className="fa-solid fa-circle-arrow-right"></i>
      </div>
      <p>{props.coursePara}</p>
      <p className="enrolled">Enrolled(2,334)</p>
      <div className="star-icon">
        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
      </div>
      <h3 className="course-trainer">
        Trainer-Name:<span>{props.courseTrainer}</span>
      </h3>
      
        
      <progress className="progress-bar" id="file" value="38" max="100"> 32% </progress>
      
      <button className="continue">Continue</button>

    </div>
  </div>
  
</div>
    </>
  )
}

export default Cards