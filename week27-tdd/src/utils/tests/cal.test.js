// sum.test.js
import mul from "../cal";

test("1 곱하기 2", () => {
  expect(mul(1, 2)).toBe(2);
});

test("인수가 숫자형이 아닐때 오류 발생", () => {
  expect(() => mul(1, "2")).toThrow("숫자형이 아닙니다");
  expect(() => mul("1", 2)).toThrow("숫자형이 아닙니다");
  expect(() => mul("1", "2")).toThrow("숫자형이 아닙니다");
});
