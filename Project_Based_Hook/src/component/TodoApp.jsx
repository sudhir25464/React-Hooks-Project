import React, { useReducer } from 'react';

const initialState = { todos: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.todo] };
    case 'REMOVE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.id) };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    dispatch({
      type: 'ADD_TODO',
      todo: { id: Date.now(), task, completed: false },
    });
    setTask('');
  };

  return (
    <div className='p-5'>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
            >
              {todo.task}
            </span>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
