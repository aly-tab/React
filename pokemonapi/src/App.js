//import logo from './logo.svg';
//import './App.css';
import React, {useState} from 'react';

function App() {
  const [state, setState] = useState([]);
  
  const handleSubmit = () => {
    console.log("button has been clicked");
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        setState({
          pokemon: response.results
        })
      })
  }
  
  return (
    <div className="App">
        <button onClick={handleSubmit}>Fetch Pokemon</button>
        {state.pokemon ? state.pokemon.map( (item, i) => {
          return(<div key={i}>{item.name}</div>)
        }):null}
    </div>
  );
}

export default App;
