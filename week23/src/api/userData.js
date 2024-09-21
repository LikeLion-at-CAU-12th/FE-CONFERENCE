//데이터 패치
import React from 'react';

const userData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await response.json();
    return data; //패치해온 응답을 json형식으로 반환해서 data에 담아서 return해줌
   
};

export default userData;