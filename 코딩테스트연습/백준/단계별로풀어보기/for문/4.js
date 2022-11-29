const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(arr) {
  const len = Number(arr[0]);
  let answer = "";

  // 반복문에서 바로바로 출력하는 것보다 하나의 저장 공간에 담은 후 한번에 출력하는게 훨 빠르다..
  for (let i = 1; i <= len; i++) {
    const arr2 = arr[i].split(" ");
    answer += Number(arr2[0]) + Number(arr2[1]) + "\n";
  }

  return answer;
}

console.log(solution(input));
