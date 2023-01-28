const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [N, ...arr] = input.map((el) => el.split(' ').map(Number));
  const answer = [];

  for (let i = 1; i < +N * 2 + 1; i += 2) {
    const len = arr[i].length;
    const pSum = Array.from({ length: len + 1 }, () => 0);

    for (let j = 0; j < len; j++) {
      pSum[j + 1] = Math.max(pSum[j] + arr[i][j], arr[i][j]);
    }
    pSum.shift();
    answer.push(Math.max(...pSum));
  }
  console.log(answer.join('\n'));
});
