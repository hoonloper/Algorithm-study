const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  // 언저 제한으로 노드는 가능한 언어에 포함되지 않아서 못풂......
}

solution(input);
