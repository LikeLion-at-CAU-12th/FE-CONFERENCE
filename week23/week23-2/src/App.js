// App.js
import React, { useState } from 'react';
import UserList from './manageUsers/userList';
import UserInput from './manageUsers/userInput';
import { useUsers } from './manageUsers/useUsers';

const App = () => {
  const [users, setUsers] = useUsers(); // 이걸로 초기화해주기
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const addUser = () => {
    if (name && email) {
      const newUser = { id: users.length + 1, name, email };
      setUsers([...users, newUser]);
      setName('');
      setEmail('');
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>UserList</h1>
      <UserList users={users} deleteUser={deleteUser} />
      <UserInput name={name} setName={setName} email={email} setEmail={setEmail} addUser={addUser} />
    </div>
  );
};

export default App;