const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// 암묵적 형변환에 유의하자.. Number(input)이 아닌 확실히 Number(input[0])으로
const data = Number(input[0]);

function solution(data) {
  let sum = 0;

  for (let i = 0; i < data; sum += ++i) {}
  console.log(sum);
}

solution(data);
