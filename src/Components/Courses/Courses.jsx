import React from "react";
import Card from "./Card";
import Data from './Data'

function Courses() {
  return (
    <>
    <div className="course-heading">
        <h1 className="heading-title">Our Popular Courses</h1>
        <p className="heading-para">Enroll now and take your skills to a next level </p>
        <hr className="horizontal"/>

      </div>
    <div className="cards-container">
      
      {Data.map((val,index) => {
        return (
         
            <Card key={index} courseImg={val.courseImg} courseheading={val.courseheading} />
         
        );
      })}
      </div>
    </>
  );
}

export default Courses;