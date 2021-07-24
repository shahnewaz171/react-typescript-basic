import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <input type="text" placeholder="Task..."/>
        <input type="number" placeholder="Deadline (in Days)" />
        <button>Add Task</button>
      </div>
      <div className="todo-list"></div>
    </div>
  );
}

export default App;
