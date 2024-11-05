//실패하는 테스트 케이스
/*
const sum = require('./sum');

test('2 + 3은 5이다', () => {
  const result = sum(2, 3);
  expect(result).toBe(6); // 여기서 오류가 발생: 2 + 3은 5가 되어야 하지만 6을 기대하고 있음
});
*/

//성공하는 테스트 케이스 
const sum = require('./sum');

test('2 + 3 should equal 5', () => {
  const result = sum(2, 3);
  expect(result).toBe(5); // 올바르게 예상한 결과 5
});
