const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const nums = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let count = 0;

  for (const n of nums) {
    if (n <= 1) {
      continue;
    }
    let flag = false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      count++;
    }
  }
  console.log(count);
});
