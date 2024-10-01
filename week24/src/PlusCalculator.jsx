import React, { useState, useMemo } from 'react';

function PlusCalculator() {
  const [total, setTotal] = useState(0); // 누적된 합계
  const [input, setInput] = useState(''); // 입력값

  // useMemo를 사용하여 total 값을 계산
  const plusNumber = useMemo(()=> {
    console.log('더하기 계산 중');
    return total;
  }, [total]); // total 값이 변경될 때만 계산

  // 버튼을 클릭할 때 total에 입력값을 더함
  const handleAdd = () => {
    setTotal(prevTotal => prevTotal + Number(input));
    setInput(''); // 입력값 초기화
  };

  return (
    <div>
      <h2>더하기 계산</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="숫자를 입력하세요."
      />
      <button onClick={handleAdd}>
        더하기
      </button>
      <p>값: {plusNumber}</p>
    </div>
  );
}

export default PlusCalculator;
