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
import AdminSidebar from '../../AdminSidebar/AdminSidebar'


const student= [{
  ID: Number,
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
  {ID:29221002001,Name:"Devang Banta",Email:"devang.banta@chitkarauniversity.edu.in",Subject:"Full-Stack Web",SubjectCode:"FS9W69"},
  {ID:29221002002,Name:"Moksh Teng",Email:"moksh.teng@chitkarauniversity.edu.in",Subject:"Full-Stack Java",SubjectCode:"J1AVA1"},
  {ID:29221002003,Name:"Kartik Sharma",Email:"kartik.sharma@chitkarauniversity.edu.in",Subject:"Introduction to Node",SubjectCode:"NOD3JS"},
  {ID:29221002004,Name:"Sourav Sharma",Email:"sourav.sharma@chitkarauniversity.edu.in",Subject:"Introduction To C++",SubjectCode:"C2PP34"},
  {ID:29221002005,Name:"Pritam Das",Email:"pritam.das@chitkarauniversity.edu.in",Subject:"Introduction to C",SubjectCode:"ITC44C"},
  {ID:29221002006,Name:"Tushar Tamta",Email:"tushar.tamta@chitkarauniversity.edu.in",Subject:"Basics of Angular",SubjectCode:"ANG11E"},
  {ID:29221002002,Name:"Moksh Teng",Email:"moksh.teng@chitkarauniversity.edu.in",Subject:"Advanced Java",SubjectCode:"ADJ244"},
  {ID:29221002001,Name:"Devang Banta",Email:"devang.banta@chitkarauniversity.edu.in",Subject:"Introduction to UI/UX",SubjectCode:"UI10UX"},
  {ID:29221002001,Name:"Devang Banta",Email:"devang.banta@chitkarauniversity.edu.in",Subject:"Advanced Web",SubjectCode:"AD2WEB"},
  {ID:29221002010,Name:"Devang Banta",Email:"devang.banta@chitkarauniversity.edu.in",Subject:"Full-Stack Web",SubjectCode:"FS9W69"},
  {ID:29221002011,Name:"Abhay Gupta",Email:"abhay.gupta@chitkarauniversity.edu.in",Subject:"Introduction to Linux",SubjectCode:"LIN9UX"},
  {ID:29221002001,Name:"Devang Banta",Email:"devang.banta@chitkarauniversity.edu.in",Subject:"Introduction to Javascript",SubjectCode:"JS1001"},
  {ID:29221002002,Name:"Moksh Teng",Email:"moksh.teng@chitkarauniversity.edu.in",Subject:"Data Structures",SubjectCode:"DSA121"},
  
  
];

export default function ViewTrainer() {
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
    <AdminSidebar/>
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
                <TableCell align="center"style={{borderRight:`2px solid brown`,fontSize:`1.1em`,fontWeight:`550`}}>SUBJECT&nbsp;</TableCell>

                <TableCell align="center" style={{fontSize:`1.1em`,fontWeight:`550`}} >SUBJECT-CODE&nbsp;</TableCell>
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
                  <TableCell align="center" style={{position:`relative`,borderLeft:`2px solid brown` ,borderBottom:`2px solid brown`,fontSize:`1.05em`,backgroundColor:`#f2d2a7`}}>{row.Subject}</TableCell>

                  <TableCell align="center" style={{position:`relative`,borderLeft:`2px solid brown`,borderBottom:`2px solid brown`,fontSize:`1.05em`,backgroundColor:`#fcc986`}}>{row.SubjectCode}</TableCell>
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

