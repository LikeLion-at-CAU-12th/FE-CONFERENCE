//유저 입력받는란(이름과 이메일 응답받기.)
//App.js리턴 부분에 있던거 가져오기.
import React from 'react';

const UserInput = ({name, email, setName, setEmail, addUser}) => {
    return (
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름"/>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일"/>
          <button onClick={addUser}>Add</button>
        </div>
    );
};

export default UserInput;