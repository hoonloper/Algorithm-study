const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const val = input[0].split(" ");

function solution(h, m) {
  let hour = 0;
  let minute = 0;

  if (m - 45 < 0) {
    hour = h - 1;
    minute = m + 15;
  } else {
    hour = h;
    minute = m - 45;
  }

  if (hour < 0) {
    hour = 23;
  }

  console.log(hour, minute);
}

solution(Number(val[0]), Number(val[1]));
