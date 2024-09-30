import React from 'react'
import { Button, QuizDom } from './typetest/Question_1'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const startTest = () => {
        navigate('/typetest/1');
    };

  return (
    <QuizDom style={{marginTop : '20%'}}>
      <Button onClick={startTest}>퀴즈 시작</Button>
    </QuizDom>
  )
}

export default Home
