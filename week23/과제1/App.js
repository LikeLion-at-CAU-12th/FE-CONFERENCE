import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import AddUser from './AddUser';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>UserList</h1>
      <UserList users={users} deleteUser={deleteUser} />
      <AddUser onAdd={addUser} />
    </div>
  );
};

export default App;