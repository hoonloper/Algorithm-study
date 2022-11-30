const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(num) {
  let answer = "";

  // 반복문에서 바로바로 출력하는 것보다 하나의 저장 공간에 담은 후 한번에 출력하는게 훨 빠르다..
  for (let i = 1; i <= Number(num); i++) {
    answer += "*";
    console.log(answer);
  }

  return answer;
}

solution(input[0]);
