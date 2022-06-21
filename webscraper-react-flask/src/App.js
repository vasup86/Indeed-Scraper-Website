import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/main.js';
import Result from "./components/result.js";

export default function App() {
  const [inputData, setInputData] = useState({
    title: "",
    location: "",
    pages: 0,
    distance:"Distance in KM",
    date:"D",
  });
  const [processData, setProcessData] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);
  const [result, setResult] = useState();
  //console.log(inputData)
  const updateData = (event) => {
    setInputData(prevData => {
      return{
        ...prevData,
        //[] can help to change dynamic string that is store in a var and use it as property name
        [event.target.name]: event.target.value
      }
    });
    // console.log(event.target);
    // console.log(event.target.value);
  }
  
  useEffect(()=>{
    console.log(inputData)
     //make an API call to flask
    fetch("/api/scrape",{
        'method':"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(inputData)  //send our user data as POST
      })
      .then(res => res.json()) //get scraped data as GET
      .then(data=>{
        console.log(data);
        console.log(data.results[0].company);
        setResult(data);
        setDisplayResult(true);
      })
      .catch(error => console.log(error));
  }, [processData])

  const submitData = (event)=>{
    event.preventDefault(); //does not refresh page when submit form
    //update the processData to true and make an API call to flask
    setProcessData(prevData => {return !prevData})
  }
  //console.log(processData)
  const setData = () =>{
    setDisplayResult(false)
  }
  return (
    <div className="App">
      {!displayResult && <Main data = {inputData} setData = {updateData} setProcessData = {submitData}/>}
      {displayResult && <Result data={result.results} setData = {setData}/>}
    </div>
  );
}
