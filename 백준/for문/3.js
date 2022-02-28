const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const data = Number(input);

let sum = 0;

for (let i = 1; i <= data; sum += i++) {}
console.log(sum);
// function solution(data) {}

// solution(data);
