const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

function solution(arr) {
  const mul = String(+arr[0] * +arr[1] * +arr[2]);
  const answer = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  mul.split("").forEach((x) => {
    answer[x] = (answer[x] || 0) + 1;
  });

  for (let i in answer) {
    console.log(answer[i]);
  }
}

solution(input);
