const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const val = input[0].split(" ");

function solution(A, B) {
  if (A > B) return ">";
  else if (A < B) return "<";
  else return "==";
}

console.log(solution(Number(val[0]), Number(val[1])));
