const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const num = input[0];
  const answer = [];
  let cnt = num;
  while (+cnt) {
    let sum = 0;
    for (const x of cnt) {
      sum += +x;
    }
    sum += +cnt;

    if (sum.toString() === num) {
      answer.push(+cnt);
    }

    cnt = (+cnt - 1).toString();
  }
  if (!answer.length) answer.push(0);
  console.log(Math.min(...answer));
});
