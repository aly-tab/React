//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Tabs from './components/Tabs';


function App() {
  const array = [
    ["Tab 1", "Tab 1 content"],
    ["Tab 2", "Tab 2 content"],
    ["Tab 3", "Tab 3 content"],
  ];
  return (
    <div className="App">
      <Tabs tabs={array} />
    </div>
  );
}

export default App;
