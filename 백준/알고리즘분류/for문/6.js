const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(num) {
  let answer = "";
  for (let i = Number(num); i > 0; i--) {
    answer += i + "\n";
  }
  return answer;
}

console.log(solution(input[0]));
