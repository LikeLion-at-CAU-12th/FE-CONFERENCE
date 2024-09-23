import React, { useState } from 'react'

const AddUser = ({onAdd}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = () => {
        if (name && email) {
          onAdd({ name, email });
          setName('');
          setEmail('');
        }
      };

  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름"/>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일"/>
        <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddUser
