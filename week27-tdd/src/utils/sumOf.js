// sumOf.js
function sumOf(numbers) {
  let result = 0;
  numbers.forEach((n) => {
    result += n;
  });
  return result;
}

export default sumOf;
