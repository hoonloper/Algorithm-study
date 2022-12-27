const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

function solution(arr) {
  arr = arr.map((item) => Number(item));
  const max = Math.max(...arr);
  const index = arr.indexOf(max);

  console.log(max);
  console.log(index + 1);
}

solution(input);
