import React, { useState, useReducer } from 'react';

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        { id: Date.now(), task: action.task, isCompleted: false }
      ];
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.id ? { ...task, isCompleted: !task.isCompleted } : task
      );
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
};

// Initial tasks
const initialTasks = [
  { id: 1, task: "Task 1", isCompleted: false },
  { id: 2, task: "Task 2", isCompleted: false },
  { id: 3, task: "Task 3", isCompleted: false }
];

function Todo() {
  const [input, setInput] = useState('');
  const [state, dispatch] = useReducer(reducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: 'ADD_TASK', task: input });
      setInput('');
    }
  };

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE_TASK', id });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TASK', id });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {state.map(task => (
          <li key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            {task.task}
            <button onClick={() => handleToggle(task.id)}>
              {task.isCompleted ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
