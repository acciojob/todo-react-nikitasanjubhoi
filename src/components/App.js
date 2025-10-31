import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [task, setTask] = useState("");      // for input value
  const [todos, setTodos] = useState([]);    // for list of todos

  // add todo
  const addTodo = () => {
    if (task.trim() === "") return; // prevent adding empty tasks
    setTodos([...todos, task]);
    setTask("");
  };

  // delete todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>React To-Do List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 ? (
          <p className="empty">No tasks yet!</p>
        ) : (
          todos.map((item, index) => (
            <li key={index} className="todo-item">
              <span>{item}</span>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
