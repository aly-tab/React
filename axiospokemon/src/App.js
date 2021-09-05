//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState([]);
  
  const handleSubmit = () => {
    console.log("button has been clicked");
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        setState(response.data.results)
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  return (
    <div className="App">
        <button onClick={handleSubmit}>Fetch Pokemon</button>
        {state ? state.map( (item, i) => {
          return(<div key={i}>{item.name}</div>)
        }):null}
    </div>
  );
}

export default App;
