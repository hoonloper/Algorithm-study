const num = "50, 100, 50, 75";
const num2 = "100";
const num3 = "0, 30, 0, 0, 70, 100, 80, 100, 99, 88, 70";

function solution(num) {
  const score = num.split(", ");
  const number = score.map((a) => Number(a));
  const result = number.reduce((a, b) => a + b, 0) / number.length;

  return Math.round(result);
}

console.log(solution(num));
console.log(solution(num2));
console.log(solution(num3));
