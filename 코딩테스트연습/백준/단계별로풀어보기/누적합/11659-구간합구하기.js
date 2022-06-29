const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = [];
  const [[N, K], arr, ...other] = input.map((el) =>
    el.split(' ').map((el) => +el)
  );
  const psum = Array.from({ length: N + 1 }, () => 0);

  for (let i = 0; i < N; i++) {
    psum[i + 1] = psum[i] + arr[i];
  }

  for (const [start, end] of other) {
    answer.push(psum[end] - psum[start - 1]);
  }

  console.log(answer.join('\n'));
});
