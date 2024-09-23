import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      addUser({ name, email });
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="이름" 
      />
      <input 
        type="text" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="이메일" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default UserForm;