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
  const [[N, M], ...arr] = input.map((el) => el.split(' ').map((el) => +el));
  const data = arr.slice(0, N);
  const [[K], ...ijxy] = arr.slice(N, arr.length);

  const psum = Array.from({ length: N + 1 }, () =>
    Array.from({ length: M + 1 }, () => 0)
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      psum[i + 1][j + 1] =
        psum[i + 1][j] + psum[i][j + 1] - psum[i][j] + data[i][j];
    }
  }

  for (const [i, j, x, y] of ijxy) {
    answer.push(
      psum[x][y] - (psum[i - 1][y] + psum[x][j - 1]) + psum[i - 1][j - 1]
    );
  }

  console.log(answer.join('\n'));
});
