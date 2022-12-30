const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [[N], arr] = input.map((el) => el.split(' ').map(Number));
  const sum = Array.from({ length: N + 1 }, () => BigInt(0));
  let answer = BigInt(0);

  for (let i = 1; i < N; i++) {
    sum[i] += sum[i - 1] + BigInt(arr[i]);
  }
  for (let i = 0; i < N - 1; i++) {
    answer += (sum[N - 1] - sum[i]) * BigInt(arr[i]);
  }
  console.log(String(answer));
});
