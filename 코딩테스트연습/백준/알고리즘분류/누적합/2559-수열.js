const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [[N, K], arr] = input.map((el) => el.split(' ').map(Number));
  let sum = 0;
  let count = 0;

  for (let i = 0; i < K; i++) {
    sum += arr[i];
  }

  let max = sum;

  for (let i = K; i < N; i++) {
    sum += arr[i];
    sum -= arr[count++];
    max = Math.max(max, sum);
  }
  console.log(max);
});
