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
  const [[N, K], ...arr] = input.map((el) => el.split(' ').map((el) => +el));
  const xy = arr.slice(0, N);
  const counts = arr.slice(N, N + K);
  const psum = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => 0)
  );

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      psum[x + 1][y + 1] =
        psum[x][y + 1] + psum[x + 1][y] - psum[x][y] + xy[x][y];
    }
  }
  for (const [x1, y1, x2, y2] of counts) {
    answer.push(
      psum[x2][y2] -
        (psum[x1 - 1][y2] + psum[x2][y1 - 1]) +
        psum[x1 - 1][y1 - 1]
    );
  }

  console.log(answer.join('\n'));
});
