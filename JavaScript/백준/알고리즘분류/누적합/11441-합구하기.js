const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [[N], arr, [M], ...IJ] = input.map((el) => el.split(' ').map(Number));
  const answer = [];

  const pSum = Array.from({ length: N + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    pSum[i + 1] = pSum[i] + arr[i];
  }

  for (const [I, J] of IJ) {
    answer.push(pSum[J] - pSum[I - 1]);
  }

  console.log(answer.join('\n'));
});
