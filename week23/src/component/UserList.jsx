//유저리스트 보여주기.
import React from 'react';

const UserList = ({users, deleteUser}) => {
    return (
        <div>
            <ul>
        {users.map((user) => (
          <li>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user.id)}>Del</button>
          </li>
        ))}
      </ul>
        </div>
    );
};

export default UserList;