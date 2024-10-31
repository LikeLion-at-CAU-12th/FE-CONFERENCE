import { element } from "prop-types";

// sum.js
function mul(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("숫자형이 아닙니다");
  }
  return a * b;
}

export default mul;
