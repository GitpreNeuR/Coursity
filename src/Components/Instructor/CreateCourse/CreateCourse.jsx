import React, { useState } from "react";
import "./styles.css";

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    CourseName: "",
    CourseCode: "",
    TrainerName: "",
    CourseDesc: "",
    CourseDetails:"",
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { CourseName,CourseCode,TrainerName,CourseDesc,CourseDetails} = formData;

  return (
      <>
<InstructorSidebar/>
    <form className="create-course-form">
      <input
        value={CourseName}
        onChange={e => updateFormData(e)}
        placeholder="Course name"
        type="text"
        name="CourseName"
        required
      />
      <input
        value={CourseCode}
        onChange={e => updateFormData(e)}
        placeholder="Course Code"
        type="text"
        name="CourseCode"
        required
      />
      <input
        value={TrainerName}
        onChange={e => updateFormData(e)}
        placeholder="Trainer Name"
        type="text"
        name="TrainerName"
        required
      />
      <input
        value={CourseDesc}
        onChange={e => updateFormData(e)}
        placeholder="Course Description"
        type="text"
        name="CourseDesc"
        required
      />

<input
        value={CourseDetails}
        onChange={e => updateFormData(e)}
        placeholder="Course Details"
        type="text"
        name="CourseDetails"
        required
      />

      <button type="submit">Create Course</button>
    </form>
    </>
  );
};

export default CreateCourse;
