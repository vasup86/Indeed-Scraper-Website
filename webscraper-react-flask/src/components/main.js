import React from 'react';
import '../css/main.css'

export default function Main({data, setData, setProcessData}){
    
    // <input className = "distance" type="text" placeholder = "Select distance (KM)" onChange={setData}/>
    // <input className = "date" type="text" placeholder = "Select date posted" onChange={setData}/>

    return(
        <div className='root'>
            <form onSubmit={setProcessData}>
                <div className = "segment">Indeed Scraper</div>
                <label >
                    <input name = "title" type="text" placeholder = "Enter Job Title" onChange={setData} value={data.title}/>
                </label>
                <label>
                    <input name = "location" type="text" placeholder = "Enter location" onChange={setData} value={data.location}/>
                </label>
                <label>
                    <input name = "pages" type="number" placeholder = "Enter No. of Pages" onChange={setData} value={data.pages}/>
                    </label>
                <label className='distance'>
                    <select name = "distance" onChange = {setData} value={data.distance}>
                        <option value="Distance in KM">Select Distance (KM)</option>
                        <option value="Exact">Exact</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </label>
                <label className='date'>
                    <select name = "date" onChange={setData} value={data.date}>
                        <option value="D">Date Posted</option>
                        <option value="24">24 hrs</option>
                        <option value="3">3 days</option>
                        <option value="7">7 days</option>
                        <option value="14">14 days</option>
                    </select>
                </label>
                <button className='red'>Submit</button>
            </form>
        </div>
    );
}