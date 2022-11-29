const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const time = input[0].split(" ");
const oven = input[1];

function solution(h, m, o) {
  let hour = 0;
  let minute = 0;

  if (m + o >= 60) {
    hour = Math.floor(h + (m + o) / 60);
    minute = Math.floor((m + o) % 60);
  } else {
    hour = h;
    minute = m + o;
  }

  if (hour >= 24) {
    hour %= 24;
  }

  console.log(hour, minute);
}

solution(Number(time[0]), Number(time[1]), Number(oven));
