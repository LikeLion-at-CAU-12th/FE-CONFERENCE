// useFetchUsers.js
import { useState, useEffect } from 'react';

const useFetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return [users, setUsers];
};

export default useFetch;