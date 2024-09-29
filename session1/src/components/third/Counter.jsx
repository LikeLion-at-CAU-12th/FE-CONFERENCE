import React, { useState } from "react";

const Counter = ({ render }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      {/* render prop은 함수로, 현재 count 값을 인자로 받아서 렌더링할 내용을 반환한다. */}
      {/* 즉 자식 컴포넌트에서의 내용을 여기다가 반환한다는 것이다 */}
      {render(count)}
    </div>
  );
};

export default Counter;
