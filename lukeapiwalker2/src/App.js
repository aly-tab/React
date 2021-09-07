//import logo from './logo.svg';
//import './App.css';

import React, { useState } from 'react';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import axios from 'axios';

import People from './components/People';
import Planets from './components/Planets';
import Kenobi from './components/Kenobi';
import Home from './components/Home';

function App() {
  const [idn, setIdn] = useState({
    id: null
  })
  const [object, setObject] = useState({
    obj: { value: "people" },
  });
  const [res, setRes] = useState([]);
  const history = useHistory();

  const onChange1 = e => {
    setIdn({
      id: e.target.value
    })
  }

  const onChange2 = e => {
    setObject({
      obj: { value: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button has been clicked");
    console.log(object.obj.value);
    console.log(idn.id);
    axios.get("https://swapi.dev/api/" + object.obj.value + "/" + idn.id)
      .then(response => {
        setRes(response.data);
        console.log(response.data);
        history.push("/" + object.obj.value + "/" + idn.id)
      })
      .catch(err => {
        console.log(err);
        history.push("/error");
      })
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <label>Search for: </label>
          <select onChange={onChange2} name="obj" value={object.obj.value}>
            <option value="people">people</option>
            <option value="planets">planet</option>
          </select>
          <label>ID: </label>
          <input onChange={onChange1} type="number" name="id" />
          <input type="submit" value="Submit"/>
        </form>
      </div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/people/:id">
            <People res={res} />
          </Route>
          <Route path="/planets/:id">
            <Planets res={res} />
          </Route>
          <Route path="/error">
            <Kenobi />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
