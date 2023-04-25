const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [M, N] = input.shift().split(' ').map(Number);
    const [...board] = input.map((el) => el.split(' ').map(Number));

    const moves = [
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 0],
      [1, -1],
      [1, 1],
      [-1, 1],
      [-1, -1],
    ];

    const checkRange = (x, y) => x >= 0 && x < +M && y >= 0 && y < +N;
    const bfs = (x, y) => {
      const queue = [[x, y]];

      while (queue.length) {
        const [xx, yy] = queue.shift();
        if (checkRange(xx, yy) && board[xx][yy]) {
          board[xx][yy] = 0;

          moves.forEach(([dx, dy]) => {
            const [nx, ny] = [xx + dx, yy + dy];
            queue.push([nx, ny]);
          });
        }
      }
    };

    let answer = 0;
    for (let i = 0; i < +M; i++) {
      for (let j = 0; j < +N; j++) {
        if (!board[i][j]) continue;
        bfs(i, j);
        answer++;
      }
    }

    console.log(answer);
  });
