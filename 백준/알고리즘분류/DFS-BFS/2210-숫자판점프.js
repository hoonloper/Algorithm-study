const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const graph = input.map((el) => el.split(' ').map(Number));
    const N = graph.length;
    const moves = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    const answer = [];

    const checkRange = (x, y) => x >= 0 && x < N && y >= 0 && y < N;

    const dfs = (x, y, str) => {
      if (str.length === 6) {
        if (!answer.includes(str)) {
          answer.push(str);
        }
        return;
      }

      moves.forEach(([dx, dy]) => {
        const [nx, ny] = [dx + x, dy + y];
        if (checkRange(nx, ny)) {
          dfs(nx, ny, str + graph[nx][ny]);
        }
      });
    };

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        dfs(row, col, graph[row][col] + '');
      }
    }
    console.log(answer.length);
  });
