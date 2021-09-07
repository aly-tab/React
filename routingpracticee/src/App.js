//import logo from './logo.svg';
//import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams
} from "react-router-dom";
    
const Home = (props) => {
  return (
    <h1>Welcome</h1>
  );
}

const Hello = (props) => {
  const { val } = useParams();
  const { color1 } = useParams();
  const { color2 } = useParams();
  return (
    isNaN(val) === true?
    <h1 style={{color: color1, backgroundColor: color2}}>The word is: {val}</h1> :
    <h1 style={{color: color1, backgroundColor: color2}}>The number is: {val}</h1> 
  )
}
    
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:val">
          <Hello/>
        </Route>
        <Route exact path="/:val/:color1/:color2">
          <Hello/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
