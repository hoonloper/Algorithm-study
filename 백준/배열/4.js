const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

function solution(arr) {
  const set = new Set(arr.map((item) => item % 42));
  const answer = [...set];

  console.log(answer.length);
}

solution(input);
