import React from "react";
import styled from "styled-components";

// 테두리를 추가하는 HOC
const withBorder = (WrappedComponent) => {
  return function WithBorderComponent(props) {
    return (
      // Wrapped에 속성을 추가해도 됨. 여기서는 그냥 새로운 Boreder컨테이너를 추가한 것
      <BorderedContainer>
        <WrappedComponent {...props} />
      </BorderedContainer>
    );
  };
};

export default withBorder;

const BorderedContainer = styled.div`
  border: 2px solid #007bff;
  padding: 10px;
  border-radius: 5px;
`;
