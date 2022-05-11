import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import InstructorSidebar from "../../InstructorSidebar/InstructorSidebar";

const student= [{
  ID: String,
  Name: String,
  Email: String,
  Subject:String,
  SubjectCode:String,
  
}]


const useStyles = makeStyles({
  table: {
    minWidth: 850
  }
});

const originalRows= [
  {ID:"1911985041",Name:"Shashank Shundil",Email:"shashankshundil.cse19@chitkarauniversity.edu.in",Section:"62-L",Semester:6},
  {ID:"1911985042",Name:"Kashish Dua",Email:"kashishdua.cse19@chitkarauniversity.edu.in",Section:"61-L",Semester:6},
  {ID:"1911985043",Name:"Devang Banta",Email:"devangbanta.cse19@chitkarauniversity.edu.in",Section:"61-L",Semester:6},
  {ID:"1911985016",Name:"Janit Jain",Email:"janitjain.cse19@chitkarauniversity.edu.in",Section:"62-L",Semester:6},
  {ID:"1911985066",Name:"Moksh Teng",Email:"mokshteng.cse19@chitkarauniversity.edu.in",Section:"61-L",Semester:6},
  {ID:"1911985031",Name:"Gurpreet Singh",Email:"gurpreetsingh.cse19@chitkarauniversity.edu.in",Section:"61-L",Semester:6},
  {ID:"1911985071",Name:"Kaushal Kumar",Email:"kaushalkumar.cse19@chitkarauniversity.edu.in",Section:"62-L",Semester:6},
  {ID:"1911985072",Name:"Tushar Tamta",Email:"tushartamta.cse19@chitkarauniversity.edu.in",Section:"62-L",Semester:6},
  {ID:"1911985067",Name:"Satyam",Email:"satyam.cse19@chitkarauniversity.edu.in",Section:"61-L",Semester:6},
  {ID:"1911985050",Name:"Kartik Arora",Email:"kartikarora.cse19@chitkarauniversity.edu.in",Section:"62-L",Semester:6},
  {ID:"1911985041",Name:"Shashank Shundil",Email:"shashankshundil.cse19@chitkarauniversity.edu.in",Section:"61-L",Semester:6},
  {ID:"1911985042",Name:"Kashish Dua",Email:"kashishdua.cse19@chitkarauniversity.edu.in",Section:"61-L",Semester:6},
  {ID:"1911985043",Name:"Devang Banta",Email:"devangbanta.cse19@chitkarauniversity.edu.in",Section:"62-L",Semester:6},
  {ID:"1911985016",Name:"Janit Jain",Email:"janitjain.cse19@chitkarauniversity.edu.in",Section:"61-L",Semester:6},
  {ID:"1911985066",Name:"Moksh Teng",Email:"mokshteng.cse19@chitkarauniversity.edu.in",Section:"62-L",Semester:6},
  {ID:"1911985031",Name:"Gurpreet Singh",Email:"gurpreetsingh.cse19@chitkarauniversity.edu.in",Section:"61-L",Semester:6},
  {ID:"1911985071",Name:"Kaushal Kumar",Email:"kaushalkumar.cse19@chitkarauniversity.edu.in",Section:"62-L",Semester:6},
  {ID:"1911985072",Name:"Tushar Tamta",Email:"tushartamta.cse19@chitkarauniversity.edu.in",Section:"62-L",Semester:6},
  {ID:"1911985067",Name:"Satyam",Email:"satyam.cse19@chitkarauniversity.edu.in",Section:"61-L",Semester:6},

];

export default function ViewStudents() {
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const classes = useStyles();

  const requestSearch = (searchedVal)=> {
    const filteredRows = originalRows.filter((row) => {
      return row.Name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
    <InstructorSidebar/>
      <Paper style={{width:`1300px`,height:'700px',overflow:`scroll`,border:`2px solid brown`,position:`relative`,top:`4em`,backgroundColor:`#f2d2a7`}}>
        <SearchBar style={{position:`fixed`,top:`4em`,width:`inherit`}}
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer >
          <Table className={classes.table} aria-label="simple table"  >
            <TableHead style={{backgroundColor:`#f5a947`}}>
              <TableRow style={{position:`relative`,borderBottom:`2px solid brown`}}>
                <TableCell align="center" style={{borderRight:`2px solid brown`,fontSize:`1.1em`,fontWeight:`550`}}>ID</TableCell>
                <TableCell align="center" style={{borderRight:`2px solid brown`,fontSize:`1.1em`,fontWeight:`550`}}>NAME&nbsp;</TableCell>
                <TableCell align="center"style={{borderRight:`2px solid brown`,fontSize:`1.1em`,fontWeight:`550`}}>EMAIL-ID&nbsp;</TableCell>
                <TableCell align="center"style={{borderRight:`2px solid brown`,fontSize:`1.1em`,fontWeight:`550`}}>SECTION&nbsp;</TableCell>

                <TableCell align="center" style={{fontSize:`1.1em`,fontWeight:`550`}} >SEMESTER&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row,index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" style={{borderBottom:`2px solid brown`,fontSize:`1.05em`,fontWeight:`550`,backgroundColor:`#fcc986`}} >
                    {row.ID}
                  </TableCell>
                  <TableCell align="center" style={{position:`relative`,borderLeft:`2px solid brown`,borderBottom:`2px solid brown`,fontSize:`1.05em`,backgroundColor:`#f2d2a7`}}>{row.Name}</TableCell>
                  <TableCell align="center" style={{position:`relative`,borderLeft:`2px solid brown` ,borderBottom:`2px solid brown`,fontSize:`1.05em`,backgroundColor:`#fcc986`}}>{row.Email}</TableCell>
                  <TableCell align="center" style={{position:`relative`,borderLeft:`2px solid brown` ,borderBottom:`2px solid brown`,fontSize:`1.05em`,backgroundColor:`#fcc986`}}>{row.Section}</TableCell>

                  <TableCell align="center" style={{position:`relative`,borderLeft:`2px solid brown`,borderBottom:`2px solid brown`,fontSize:`1.05em`,backgroundColor:`#f2d2a7`}}>{row.Semester}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <br />
     
    </>
  );
}

