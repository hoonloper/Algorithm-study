const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

function solution(arr) {
  arr = arr.map((item) => Number(item));
  console.log(Math.min(...arr), Math.max(...arr));
}

solution(input[1].split(" "));
