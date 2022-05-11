import React from "react";
function StudentFormInput({handleChange, formInputData, handleSubmit}){
    return(
    
        <div className="form-row row" style={{display:`flex`,gap:`1em`}}>
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.fullName} name="id" className="form-control"  placeholder="Name" />
          </div>
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.fullName} name="Name" className="form-control"  placeholder="Name" />
          </div>
          <div className="col">
            <input type="email" onChange={handleChange} value={formInputData.emailAddress} name="Email" className="form-control" placeholder="Email-ID" />
          </div>
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.fullName} name="Date" className="form-control"  placeholder="Date" />
          </div>
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.fullName} name="MotherName" className="form-control"  placeholder="Mother's Name" />
          </div>
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.salary} name="FatherName" className="form-control" placeholder="Father's Name" />
          </div>
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.salary} name="Semester" className="form-control" placeholder="Semester" />
          </div>
          <div className="col">
            <button type="submit" onClick={handleSubmit} className="nav-button item3" >Submit</button>
    </div>
        </div>
     
      
    )
    }
    
    export default StudentFormInput;