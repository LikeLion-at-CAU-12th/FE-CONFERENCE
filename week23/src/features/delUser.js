//유저삭제!
import React from 'react';

const delUser = (id, users, setUsers) => {
    setUsers(users.filter((user) => user.id !== id));
};

export default delUser;