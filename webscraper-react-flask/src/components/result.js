import React from 'react';
import "../css/result.css";
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material";
import {CSVLink} from "react-csv";

export default function Result(props){
    const DisplayData=props.data.map((info)=>{
        return(
            <TableRow key={info.key}
                sx={{'&:last-child td, &:last-child th':{border:0}}}
            >
                <TableCell align='center'>{info.title}</TableCell>
                <TableCell>{info.company}</TableCell>
                <TableCell>{info.location}</TableCell>
                <TableCell>{info.type}</TableCell>
                <TableCell>{info.date}</TableCell>
                <TableCell>{info.salary}</TableCell>
                <TableCell>{info.summary}</TableCell>
                <TableCell>{info.jobLink}</TableCell>
            </TableRow>
        )
    });
    const headers = [
        {label:"Title", key:"title"},
        {label:"Company", key:"company"},
        {label:"Location", key:"location"},
        {label:"Type", key:"type"},
        {label:"Date", key:"date"},
        {label:"Salary", key:"salary"},
        {label:"Summary", key:"summary"},
        {label:"Job Link", key:"jobLink"}
    ];
    const CSVReport = {
        filename:`${props.name}Jobs.csv`,
        headers:headers,
        data:props.data
    };
    return(
      <div className='result'>
            <TableContainer component={Paper} className = "dataTable">
                <Table aria-label='output table' stickyHeader className = "table">
                    <TableHead >
                        <TableRow className = "tableHead">
                            <TableCell align='center'>Title</TableCell>
                            <TableCell align='center'>Company</TableCell>
                            <TableCell align='center'>Location</TableCell>
                            <TableCell align='center'>Type</TableCell>
                            <TableCell align='center'>Date</TableCell>
                            <TableCell align='center'>Salary</TableCell>
                            <TableCell align='center'>Summary</TableCell>
                            <TableCell align='center'>Job Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data && DisplayData}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="Buttons">
                <div>
                    <button  onClick={props.setData}>Go back</button>
                </div>
                <div className = "downloadButton">
                    <CSVLink className = "download" {...CSVReport}>Export to CSV</CSVLink>
                </div>
            </div>
        </div>
    );
}

/*
inside return
 <div className="result">
            <div className = "dataTable">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Date Posted</th>
                            <th>Salary</th>
                            <th>Summary</th>
                            <th>Job Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data && DisplayData}
                    </tbody>
                </table>
            </div>
            
            <div className="Buttons">
                <button  onClick={props.setData}>Go back</button>
            </div>
        </div>

inside DisplayData
        <tr>
            <td>{info.title}</td>
            <td>{info.company}</td>
            <td>{info.location}</td>
            <td>{info.type}</td>
            <td>{info.date}</td>
            <td>{info.salary}</td>
            <td>{info.summary}</td>
            <td>{info.jobLink}</td>
        </tr>

*/
