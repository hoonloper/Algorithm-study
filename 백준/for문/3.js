const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const data = Number(input[0]);

function solution(data) {
  let sum = 0;

  for (let i = 0; i < data; sum += ++i) {}
  console.log(sum);
}

solution(data);
