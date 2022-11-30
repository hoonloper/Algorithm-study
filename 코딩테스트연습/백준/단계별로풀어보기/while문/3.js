const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString();

function solution(input) {
  let num = input;
  let sum = 0;
  let i = 0;

  while (true) {
    i++;

    sum = Math.floor(num / 10) + (num % 10);
    num = (num % 10) * 10 + (sum % 10);

    if (num === input) {
      break;
    }
  }

  console.log(i);
}

solution(+input);
