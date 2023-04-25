const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [M, N] = input.shift().split(' ').map(Number);
    const graph = input.map((el) => el.split('').map(Number));
    const moves = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    const checkRange = (x, y) => x >= 0 && x < M && y >= 0 && y < N;

    let flag = false;

    const bfs = (x, y) => {
      const queue = [[x, y]];

      while (queue.length) {
        const [xx, yy] = queue.shift();
        if (checkRange(xx, yy) && graph[xx][yy] === 0) {
          graph[xx][yy] = 2;

          if (xx === M - 1) {
            flag = true;
            break;
          }

          moves.forEach(([dx, dy]) => {
            const [nx, ny] = [dx + xx, dy + yy];

            queue.push([nx, ny]);
          });
        }
      }
    };

    for (let i = 0; i < N; i++) {
      if (!flag) bfs(0, i);
    }

    console.log(flag ? 'YES' : 'NO');
  });
