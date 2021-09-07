//import logo from './logo.svg';
//import './App.css';

import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [idn, setIdn] = useState({
    id: null    
  })
  const [object, setObject] = useState({
    obj: {value: "people"},
  });
  const [submitKey, setSubmitKey] = useState("");
  const [res, setRes] = useState([]);

  const onChange1 = e => {
    setIdn({
      id: e.target.value
    })
  }

  const onChange2 = e => {
    setObject({
      obj: {value: e.target.value}
    })
  }
  
  const handleSubmit = () => {
    console.log("button has been clicked");
    console.log(object.obj.value);
    console.log(idn.id);
    axios.get("https://swapi.dev/api/"+ object.obj.value + "/" + idn.id)
      .then(response => {
        setRes(response.data);
        console.log(response.data);
        setSubmitKey(object.obj.value);
      })
      .catch(err => {
        console.log(err);
        setSubmitKey("kenobi");
      })
  }
  
  return (
    <div className="App">
        <form>
          <label>Search for: </label>
          <select onChange={onChange2} name="obj" value={object.obj.value}>
            <option value="people">people</option>
            <option value="planets">planet</option>
          </select>
          <label>ID: </label>
          <input onChange={onChange1} type="number" name="id"/>
        </form>
        <button onClick={handleSubmit}>Search</button>
        { submitKey === "people"? 
          <div>
            <h1>{res.name}</h1>
            <p>Height: {res.height}</p>
            <p>Mass: {res.mass}</p>
            <p>Hair Color: {res.hair_color}</p>
            <p>Skin Color: {res.skin_color}</p>  
          </div> :
          submitKey === "planets"? 
          <div>
            <h1>{res.name}</h1>
            <p>Climate: {res.climate}</p>
            <p>Terrain: {res.terrain}</p>
            <p>Surface Water: {res.surface_water}</p>
            <p>Population: {res.population}</p> 
          </div> :
          submitKey === "kenobi"?
          <div>
            <img src="https://i.pinimg.com/originals/bc/80/f2/bc80f2f4671fc690da0a456cfdbcd020.jpg" alt={{submitKey}}/>
          </div> :
          ""     
        }
    </div>
  );
}

export default App;
