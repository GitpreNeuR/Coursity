import React from "react";
import './AddStudentTable.css'
function AddStudentTable({tableData}){
    return(
        <table className="table" style={{display:`flex`}}>
            <thead style={{margin:`auto`,width:`100%` }}>
                <tr className="table-data-row-heading">
                    <th>S.N</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Mother's Name</th>
                    <th>Father's Name</th>
                    <th>Semester</th>
                </tr>
            </thead>
            
            
            <tbody>
                
            {

            
                tableData.map((data, index)=>{
                    return(
                        
                        <tr className="table-data-row" style={{border:`2px solid blue`}} key={index}>
                            <td>{index+1}</td>
                            <td>{data.id}</td>
                            <td>{data.Name}</td>
                            <td>{data.Email}</td>
                            <td>{data.Date}</td>
                            <td>{data.MotherName}</td>
                            <td>{data.FatherName}</td>
                            <td>{data.Semester}</td>

                        </tr>
                        
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default AddStudentTable;