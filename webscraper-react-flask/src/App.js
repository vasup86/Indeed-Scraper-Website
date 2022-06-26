import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/main.js';
import Result from "./components/result.js";

export default function App() {
  const [inputData, setInputData] = useState({
    title: "",
    location: "",
    pages: 0,
    country: "",
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
        ...prevData, //add prev data
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
     //
     //dont call if title is empty
    if(inputData.location !== "" && inputData.pages>0 && inputData.title !=="" && inputData.country!==""){
      fetch("https://indeed-scraper-react.herokuapp.com/api/scrape",{
          'method':"POST",
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify(inputData)  //send our user data as POST
        })
        .then(res => res.json()) //get scraped data as GET
        .then(data=>{
          console.log(data);
          setResult(data);
          setDisplayResult(true);
        })
        .catch(error => console.log(error));
    }
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
      {displayResult && <Result name={inputData.title} data={result.results} setData = {setData}/>}
      <div style={{paddingLeft: 16, color:"black"}}>
        Github Repo:
        <a href="https://github.com/vasup86/Indeed-Scraper-Website" target="_blank" rel="noopener noreferrer">link</a>
      </div>
    </div>
  );
}
