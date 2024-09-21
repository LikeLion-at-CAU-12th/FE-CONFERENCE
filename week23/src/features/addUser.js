//유저추가기능.기능만 들어가면 됨! : 함수혀앹
import React from 'react';

const addUser = (name, email, users, setUsers, setName, setEmail) => {
    if (name && email) {
        const newUser = { id: users.length + 1, name, email };
        setUsers([...users, newUser]);
        setName('');
        setEmail('');
    }
};

export default addUser;