const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const T = +input[0];
  const times = [300, 60, 10];
  let sum = T;
  const answer = [];

  for (const time of times) {
    if (sum < time) {
      answer.push('0');
      continue;
    }
    const x = Math.floor(sum / time);
    sum -= x * time;
    answer.push('' + x);
  }

  if (sum !== 0) {
    console.log(-1);
    return;
  }
  console.log(answer.join(' '));
});
