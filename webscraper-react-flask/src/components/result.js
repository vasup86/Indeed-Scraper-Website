import React from 'react';
import "../css/result.css";

export default function Result(props){
    const DisplayData=props.data.map((info)=>{
        return(
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
        )
    })
    return(
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
    )
}