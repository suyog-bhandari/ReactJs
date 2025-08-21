import {useState, useEffect } from 'react';
import './App.css';
import Axios  from 'axios';

function App(){


  const [excuse, setExcuse]=useState("");

  const partyExcuse=()=>{
  Axios.get("https://excuser-three.vercel.app/v1/excuse/party/").then((res)=>{
    setExcuse(res.data[0].excuse);
  });
}

const familyExcuse=()=>{
  Axios.get("https://excuser-three.vercel.app/v1/excuse/family/").then((res)=>{
    setExcuse(res.data[0].excuse);
  });
}

const officeExcuse=()=>{
  Axios.get("https://excuser-three.vercel.app/v1/excuse/office/").then((res)=>{
    setExcuse(res.data[0].excuse);
  });
}

  return (
    <div className="App">
        <h1>Generate an excuse</h1>
        <button onClick={partyExcuse}>Party</button>
        <button onClick={familyExcuse}>Family</button>
        <button onClick={officeExcuse}>Office</button>

        <p>{excuse}</p>
    </div>
  );
}

export default App;
