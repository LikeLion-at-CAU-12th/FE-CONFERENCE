import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import { getUser } from './api/api_user';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getUser();
      setUsers(data);
    };
    getData();
  }, []);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>UserList</h1>
      <UserList users = {users} deleteUser = {deleteUser} />
      <AddUser users = {users} addUser = {addUser} />
    </div>
  );
};

export default App;