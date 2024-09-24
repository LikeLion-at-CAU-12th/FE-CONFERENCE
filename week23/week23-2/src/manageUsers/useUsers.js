import { useState, useEffect } from 'react';

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return [users, setUsers]; // 이렇게 통째로 반환해서 App.js에서 받아서 사용
};