import React from 'react';
import useFetch from './hook/useFetch';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  const [users, setUsers] = useFetch();

  const addUser = (newUser) => {
    const userWithId = { id: users.length + 1, ...newUser };
    setUsers([...users, userWithId]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>UserList</h1>
      <UserList users={users} deleteUser={deleteUser} />
      <UserForm addUser={addUser} />
    </div>
  );
};

export default App;