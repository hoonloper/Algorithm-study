const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(num) {
  let answer = "";
  for (let i = 1; i <= Number(num); i++) {
    answer += i + "\n";
  }
  return answer;
}

console.log(solution(input[0]));
