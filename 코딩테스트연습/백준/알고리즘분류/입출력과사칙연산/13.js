const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const val = input;

function solution(A, B) {
  console.log(Number(A) * Number(B[2]));
  console.log(Number(A) * Number(B[1]));
  console.log(Number(A) * Number(B[0]));
  console.log(Number(A) * Number(B));
}

solution(val[0], val[1]);
