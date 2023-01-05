const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[M, N, K], ...arr] = input.map((el) => el.split(' ').map(Number));

    const board = Array.from({ length: M + 1 }, () => Array(N + 1).fill(0));
    const moves = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];
    for (const [x1, y1, x2, y2] of arr) {
      let x1Count = x1;
      let y1Count = y1;
      while (true) {
        if (x1Count === x2) break;
        if (x1Count !== x2) {
          for (let y1C = y1Count; y1C < y2; y1C++) {
            board[y1C][x1Count] = 1;
          }
          x1Count++;
        }
      }
    }
    let landCount = 0;
    const dfs = (y, x) => {
      board[y][x] = 1;
      landCount++;
      moves.forEach(([dy, dx]) => {
        const [ny, nx] = [dy + y, dx + x];
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && !board[ny][nx]) {
          dfs(ny, nx);
        }
      });
    };
    const answer = [];
    for (let y = 0; y < M; y++) {
      for (let x = 0; x < N; x++) {
        if (board[y][x]) continue;
        dfs(y, x);
        answer.push(landCount);
        landCount = 0;
      }
    }
    let ans =
      '' + answer.length + '\n' + answer.sort((a, b) => a - b).join(' ');
    console.log(ans);
  });
