import React from "react";
import Counter from "./Counter";
import styled from "styled-components";

const FancyDisplay = () => {
  // 이처럼 렌더링될 내용, 즉 Counter 컴포넌트의 return 에서 render(count)의 내용이다.
  return (
    <Counter render={(count) => <FancyText>Fancy count: {count}</FancyText>} />
  );
};

export default FancyDisplay;

const FancyText = styled.div`
  font-size: 24px;
  color: #007bff;
  margin-top: 10px;
`;
