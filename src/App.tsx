import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { iTask } from './Interfaces';

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<iTask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    }
    else{
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask('');
    setDeadline(0);
  }

  return (
    <div className="App">
      <div className="header mt-5">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>
          <input type="number" placeholder="Deadline (in Days)" value={deadline} onChange={handleChange} />
        </div>
        <button onClick={addTask} className="mt-2">Add Task</button>
      </div>
      <div className="todo-list"></div>
    </div>
  );
}

export default App;
