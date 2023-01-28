const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N, M, K], ...arr] = input.map((el) => el.split(' ').map(Number));
    const graph = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
    const moves = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    const checkRange = (x, y) => x >= 0 && x < N && y >= 0 && y < M;

    for (const [x, y] of arr) {
      graph[x - 1][y - 1] = 1;
    }

    let answer = 0;
    let count = 0;
    const dfs = (x, y) => {
      if (checkRange(x, y) && graph[x][y]) {
        count += 1;
        graph[x][y] = 0;
        moves.forEach(([dx, dy]) => dfs(dx + x, dy + y));
      }
    };

    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (graph[x][y]) {
          dfs(x, y);
          answer = Math.max(count, answer);
          count = 0;
        }
      }
    }
    console.log(answer + '');
  });
