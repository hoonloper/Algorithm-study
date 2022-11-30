const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

function solution(arr) {
  while (arr[0][0] != 0) {
    const answer = arr.shift().split(" ");

    console.log(+answer[0] + +answer[1]);
  }
}

solution(input);
