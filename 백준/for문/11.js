const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const input1 = input[0].split(" ");
const input2 = input[1].split(" ");

function solution(X, arr) {
  return arr.filter((a) => a < X).join(" ");
}

console.log(solution(Number(input1[1]), input2));
