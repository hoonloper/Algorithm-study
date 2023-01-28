const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const N = +input[0];
  const A = input[1].split(' ').map((el) => +el);
  const B = input[2].split(' ').map((el) => +el);

  const aNums = [...A].sort((a, b) => a - b);
  const bNums = [...B].sort((a, b) => b - a);
  let answer = 0;
  for (let i = 0; i < N; i++) {
    answer += aNums[i] * bNums[i];
  }
  console.log(answer);
});
