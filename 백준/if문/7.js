const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const dice = input[0].split(" ");

function solution(dice) {
  if (dice[0] === dice[1] && dice[1] === dice[2]) {
    console.log(10000 + dice[0] * 1000);
  } else if (dice[0] === dice[1]) {
    console.log(1000 + dice[0] * 100);
  } else if (dice[1] === dice[2]) {
    console.log(1000 + dice[1] * 100);
  } else if (dice[0] === dice[2]) {
    console.log(1000 + dice[0] * 100);
  } else {
    console.log(Math.max(...dice) * 100);
  }
}

solution(dice);
