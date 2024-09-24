import React from "react";
import useCounter from "./useCounter";
import styled from "styled-components";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(10); // 초기값 10

  return (
    <Container>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </Container>
  )
};

export default Counter;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
