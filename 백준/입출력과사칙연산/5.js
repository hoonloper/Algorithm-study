const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const A = input[0];
const B = input[1];

function solution(A, B) {
  return A + B;
}

console.log(solution(A, B));
