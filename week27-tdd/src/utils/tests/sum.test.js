// sum.test.js
import sum from "../sum";

test("1 더하기 2", () => {
  expect(sum(1, 2)).toBe(3);
});

test("인수가 숫자형이 아닐때 오류 발생", () => {
  expect(() => sum(1, "2")).toThrow("숫자형이 아닙니다");
  expect(() => sum("1", 2)).toThrow("숫자형이 아닙니다");
  expect(() => sum("1", "2")).toThrow("숫자형이 아닙니다");
});
