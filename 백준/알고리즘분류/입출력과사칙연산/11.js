const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const val = input[0].split(" ");

function solution(year) {
  console.log(year - 543);
}

solution(val[0]);
