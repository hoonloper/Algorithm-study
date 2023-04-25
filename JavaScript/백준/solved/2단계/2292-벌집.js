const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const num = +input[0];
  let cnt = 0;
  let sum = 0;
  let answer = 0;

  while (true) {
    cnt++;
    if (Math.ceil((num - 1) / 6) <= sum) {
      answer = cnt;
      break;
    }
    sum += cnt;
  }
  console.log(answer);
});
