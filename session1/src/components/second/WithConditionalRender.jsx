import React from "react";
import styled from "styled-components";

// 조건부 렌더링을 관리하는 HOC
// WrappedComponent은 SimpleComponent이다.
const withConditionalRender = (SimpleComponent, condition) => {
  return function WithConditionalRenderComponent(props) {
    if (!condition) {
      // 그냥 div를 보내므로 border가 없음
      return (
        <FalseCondition>
          <SimpleComponent {...props}></SimpleComponent>
        </FalseCondition>
      );
    }
    // ...props는 기존의 props를 그대로 전달한다는 것
    return (
      <TrueCondition>
        <SimpleComponent {...props} />
      </TrueCondition>
    );
  };
};

export default withConditionalRender;

const FalseCondition = styled.div`
  background-color: red;
`;

const TrueCondition = styled.div`
  background-color: green;
`;
