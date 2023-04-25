const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const data = input;

function solution(data) {
  for (let i = 0; i < data[0]; i++) {
    const sum = data[i + 1].split(" ");
    console.log(Number(sum[0]) + Number(sum[1]));
  }
}

solution(data);
