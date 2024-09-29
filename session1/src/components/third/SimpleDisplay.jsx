import React from "react";
import Counter from "./Counter";

const SimpleDisplay = () => {
  // 이처럼 렌더링될 내용, 즉 Counter 컴포넌트의 return 에서 render(count)의 내용이다.
  return <Counter render={(count) => <div>Current count: {count}</div>} />;
};

export default SimpleDisplay;
