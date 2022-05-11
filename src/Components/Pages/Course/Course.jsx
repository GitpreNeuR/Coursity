import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import Cards from './Cards';
import './Cards.css'
import CardData from './CardData';


function Course() {
  return (
    <>
    <Sidebar/>
    <div className="main-course-wrapper" style={{display:`inline`}}>
      <h2 className="course-head" style={{textAlign:`center`,fontSize:`3em`,color:`#633e13`,textTransform:`uppercase`,letterSpacing:`15px`}}>In Progress</h2>
    <div className="your-course-container">
      {CardData.map((val,index) => {
        return (
         
           <Cards key={index} courseImage={val.courseImage} 
           courseTitle={val.courseTitle}
           courseTrainer={val.courseTrainer}
           coursePara={val.coursePara} />
         
        );
      })}
      </div>
      </div>
    </>
  )
}

export default Course