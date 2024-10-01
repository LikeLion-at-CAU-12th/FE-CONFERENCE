import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  console.log("Parent 렌더링");

  return (
    <div>
      <h1>React.memo로 리렌더링 최적화</h1>
      <button onClick={() => setParentCount(parentCount + 1)}>Parent Component 변경</button>
      <button onClick={() => setChildCount(childCount + 1)}>Child Component 변경</button>
      <div>parentCount = {parentCount}</div>
      <Child childCount={childCount} />
    </div>
  );
};

export default Parent;