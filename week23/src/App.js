// App.js
import React, { useState, useEffect } from 'react';
import userData from './api/userData';
import delUser from './features/delUser';
import UserList from './component/UserList';
import UserInput from './component/UserInput';
import addUser from './features/addUser';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  //초기에 데이터패치함수 실행되도록
  useEffect(() => {
    const getUsers = async()=> {
      const data = await userData(); //api>userData 함수 사용
      setUsers(data);
    };
    getUsers();
  }, []);



  return (
    <div>
      <h1>UserList</h1>
      <UserList users={users} deleteUser={(id) => delUser(id, users, setUsers)}></UserList>
      <UserInput name={name} email={email} setName={setName} setEmail={setEmail} addUser={()=> addUser(name, email, users, setUsers,setEmail, setName)}></UserInput>
    </div>
  );
};

export default App;
