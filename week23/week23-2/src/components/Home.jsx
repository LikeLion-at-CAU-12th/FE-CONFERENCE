import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  // 클릭 핸들러: 클릭된 숫자에 맞는 URL로 이동
  const handleNavigate = (number) => {
    navigate(`/test${number}`);
  };

  return (
    <HomeContainer>
      <HomeDom>
        <Title>REACT 디자인 패턴</Title>
        <Button onClick={() => handleNavigate(1)}>
          1. Presentational and Container Pattern
        </Button>
        <Button onClick={() => handleNavigate(2)}>2. HOC Pattern</Button>
        <Button onClick={() => handleNavigate(3)}>3. Render Props</Button>
        <Button onClick={() => handleNavigate(4)}>
          4. Custom Hook - Counter
        </Button>
        <Button onClick={() => handleNavigate(5)}>
          4. Custom Hook - DataFetch
        </Button>
      </HomeDom>
    </HomeContainer>
  );
};

export default Home;

// 전체 컨테이너 스타일
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
`;

// 내부 DOM 스타일
const HomeDom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// 제목 스타일
const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

// 버튼 스타일
const Button = styled.div`
  width: 70%;
  height: 50px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    background-color: #003f7f;
    transform: scale(0.95);
  }
`;
