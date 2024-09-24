import React from 'react'

const userInput = ({name, setName, email, setEmail, addUser}) => {
  return (
   <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름"/>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일"/>
      <button onClick={addUser}>Add</button>
   </>
  )
}

export default userInput