import React from 'react'
import { Button, QuizDom } from './typetest/Question_1'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const startTest = () => {
        navigate('/typetest/1');
    };
    const viewResult = () => {
        navigate('/result/panda/');
    };

  return (
    <QuizDom style={{marginTop : '20%'}}>
      <Button onClick={startTest}>퀴즈 시작</Button>
      <Button onClick={viewResult}>결과 보기</Button>
    </QuizDom>
  )
}

export default Home
