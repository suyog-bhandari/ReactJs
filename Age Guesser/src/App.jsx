import {useState, useEffect } from 'react';
import './App.css';
import Axios  from 'axios';

// fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{ // });



function App(){ 
  const [name, setName]=useState("");
  const[predictedAge,setPredictedAge]=useState(0);

  const fetchData=()=>{
    
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredictedAge(res.data.age);
    });
  }

  return (
    <div className="App">
      <input onChange={(e)=>{setName(e.target.value);}} placeholder='Ex.pedro...'/>
      <button onClick={fetchData}>Predict Age</button>

      <h1>Preducted Age: {predictedAge} </h1>
    </div>
  );
}

export default App;
