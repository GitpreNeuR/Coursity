import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(CourseName, CourseCode, Semester,EnrollDate, Trainer, Credits,Grade) {
  return { CourseName, CourseCode, Semester,EnrollDate, Trainer, Credits,Grade };
}

const rows = [
  createData('Data Structures And Algorithms','DS1A1',1,"22-7-2019",'Anuj Bhaiya',5,'A+'),
  createData('Modern Javascript','JS199',1,"22-7-2019",'Elon musk',5,'A'),
  createData('Introduction to C','CI220',1,"22-7-2019",'Devang Banta',5,'O'),
  createData('Introduction to C++','C2PP3',2,"22-8-2020",'Jane Will',5,'A+'),
  createData('Introduction To Python','PY102',2,"22-8-2020",'Moksh Teng',5,'B'),
  createData('Working With Linux','LIN81',2,"22-8-2020",'Anuj Bhaiya',5,'A'),
  createData('Internet Of Things','IOT67',3,"22-8-2021",'Anuj Bhaiya',5,'O+'),
  createData('Advanced Mathematics','AD8M4',3,"22-8-2021",'Anuj Bhaiya',5,'B+'),

  
 
];

export default function BasicTable() {
  return (
    <>
    <Sidebar/>

    <h1 className="table-head" style={{textAlign:`center`,fontSize:`3em`,color:`#633e13`,textTransform:`uppercase`,letterSpacing:`15px`}}>Your Reports</h1>
    <TableContainer component={Paper} style={{
              boxShadow: `rgba(153, 85, 32, 0.4) 5px 5px, rgba(153, 85, 32, 0.3) 10px 10px, rgba(153, 85, 32, 0.2) 15px 15px, rgba(153, 85, 32, 0.1) 20px 20px, rgba(153, 85, 32, 0.05) 25px 25px`}}>
      <Table sx={{ minWidth: 750, minHeight:550 }} aria-label="simple table" style={{border:`2px solid brown`}}>
        <TableHead>
          <TableRow style={{backgroundColor:`orange`}}>
            <TableCell style={{fontSize:`1.4em`,color:`brown`,fontWeight:`600`,border:`2px solid brown`,borderRightColor:`transparent`}}>CourseName</TableCell>
            <TableCell align="right"style={{fontSize:`1.4em`,color:`brown`,fontWeight:`600`,borderBottom:`2px solid brown`}}>CourseCode</TableCell>
            <TableCell align="right" style={{fontSize:`1.4em`,color:`brown`,fontWeight:`600`,borderBottom:`2px solid brown`}}>Semester</TableCell>
            <TableCell align="right" style={{fontSize:`1.4em`,color:`brown`,fontWeight:`600`,borderBottom:`2px solid brown`}}>Enrolled In</TableCell>

            <TableCell align="right" style={{fontSize:`1.4em`,color:`brown`,fontWeight:`600`,borderBottom:`2px solid brown`}}>Trainer</TableCell>
            <TableCell align="right" style={{fontSize:`1.4em`,color:`brown`,fontWeight:`600`,borderBottom:`2px solid brown`}}>Credits</TableCell>
            <TableCell align="right" style={{fontSize:`1.4em`,color:`brown`,fontWeight:`600`,borderBottom:`2px solid brown`}}>Grades</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.CourseName}
             
            >
              <TableCell component="th" scope="row" style={{borderBottom:`2px solid brown`,backgroundColor:`#f79e59`,fontSize:`1.2em`,fontWeight:`550`}}>
                {row.CourseName}
              </TableCell>
              <TableCell align="center" style={{borderBottom:`2px solid brown`,backgroundColor:`#f79e59`,fontSize:`1.2em`,fontWeight:`550`}}>{row.CourseCode}</TableCell>
              <TableCell align="center" style={{borderBottom:`2px solid brown`,backgroundColor:`#f79e59`,fontSize:`1.2em`,fontWeight:`550`}}>{row.Semester}</TableCell>
              <TableCell align="center" style={{borderBottom:`2px solid brown`,backgroundColor:`#f79e59`,fontSize:`1.2em`,fontWeight:`550`}}>{row.EnrollDate}</TableCell>

              <TableCell align="center" style={{borderBottom:`2px solid brown`,backgroundColor:`#f79e59`,fontSize:`1.2em`,fontWeight:`550`}}>{row.Trainer}</TableCell>
              <TableCell align="center" style={{borderBottom:`2px solid brown`,backgroundColor:`#f79e59`,fontSize:`1.2em`,fontWeight:`550`}}>{row.Credits}</TableCell>
              <TableCell align="center" style={{borderBottom:`2px solid brown`,backgroundColor:`#f79e59`,fontSize:`1.2em`,fontWeight:`550`}}>{row.Grade}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
