import React from 'react'

const userList = ({users, deleteUser}) => {
  return (
   <ul>
   {users.map((user) => (
     <li>
       {user.name} - {user.email}
       <button onClick={() => deleteUser(user.id)}>Del</button>
     </li>
   ))}
 </ul>
  )
}

export default userList