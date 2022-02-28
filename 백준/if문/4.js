const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const X = input[0];
  const Y = input[1];

  if (X > 0) {
    Y > 0 ? console.log(1) : console.log(4);
  }
  if (X < 0) {
    Y > 0 ? console.log(2) : console.log(3);
  }
  process.exit();
});

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const val = input;

function solution(X, Y) {
  if (X > 0 && Y > 0) {
    console.log(1);
  } else if (X < 0 && Y > 0) {
    console.log(2);
  } else if (X < 0 && Y < 0) {
    console.log(3);
  } else {
    console.log(4);
  }
}

solution(Number(val[0]), Number(val[1]));
