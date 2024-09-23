import React, { useState } from 'react';
import TodoList from './TodoList'; 

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  return <TodoList todos={todos} onAdd={addTodo} />;
};

export default TodoContainer;
