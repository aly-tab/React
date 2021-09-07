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
  return (
    <h1>The word is: {val}</h1>
  );
}

const Four = (props) => {
  const { val } = useParams();
  return (
    <h1>The number is: {val}</h1>
  );
}

const WordColor = (props) => {
  const { word } = useParams();
  const { color1 } = useParams();
  const { color2 } = useParams();
  return (
    <h1 style={{color: {color1}, backgroundColor: {color2}}}>{word}</h1>
    //<h1 style={{color: "red", backgroundColor: "blue"}}>hello</h1>
  )
}
    
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:val" render={ (props) => {
          if (isNaN(props.match.params.val) === true) {
            <Hello /> } else {
            <Four /> }
          }}>
        </Route>
        <Route path="/:word/:color1/:color2">
          <WordColor/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
