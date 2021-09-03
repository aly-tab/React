//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Todo from "./components/Todo";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodo.length == 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  }

  const handleTodoDelete = (index) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i != index;
    });
    setTodos(filteredTodos);
  }

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (index == i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }} type="text" value={newTodo} />
        <div>
          <button>Add</button>
        </div>
      </form>
      {
        todos.map((todo, i) => {
          return (
            <Todo 
              key={i} 
              i={i} 
              todo={todo} 
              handleToggleComplete={handleToggleComplete}
              handleTodoDelete={handleTodoDelete} 
            /> 
          );
      })};
    </div>
  );
}

export default App;
