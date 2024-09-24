import React, { useState } from "react";
import styled from "styled-components";
import withBorder from "./WithBorder";
import withConditionalRender from "./WithConditionalRender";

// 3. 조건부 렌더링을 적용할 내부 컴포넌트
const InnerComponent = ({ text }) => {
  return <Text>{text}</Text>;
};

// 2. withBorder HOC를 적용하여 기능 추가 (이를 위해 3번 주석 코드 실행)
const StyledInnerComponent = withBorder(InnerComponent);

// 1. SimpleComponent 컴포넌트 실행
const SimpleComponent = ({ text }) => {
  const [condition, setCondition] = useState(true);

  // 조건을 토글하는 함수
  const toggleCondition = () => {
    setCondition((prevCondition) => !prevCondition);
  };

  // withConditionalRender HOC를 사용하여 조건을 설정
  const ConditionalComponent = withConditionalRender(
    // 여기서 StyledInnerComponent를 구하기 위해 2번 주석 실행
    StyledInnerComponent,
    condition
  );

  return (
    <div>
      <ConditionalComponent text={text} />
      <Button onClick={toggleCondition}>
        {condition ? "현재 True" : "현재 False"}
      </Button>
    </div>
  );
};

export default SimpleComponent;

const Text = styled.div`
  font-size: 18px;
  color: #333;
  padding: 20px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
