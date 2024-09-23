import React, { useState } from 'react';

const TodoList = ({ todos, onAdd, onDelete }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
      onAdd(task);
      setTask(''); 
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>할 일 추가</button>
    </div>
  );
};

export default TodoList;
