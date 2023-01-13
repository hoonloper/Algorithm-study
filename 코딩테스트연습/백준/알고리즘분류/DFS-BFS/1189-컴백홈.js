const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [arr, ...graph] = input;
    const [R, C, K] = arr.split(' ').map(Number);
    const board = graph.map((el) => el.split(''));
    const visited = Array.from({ length: R }, () => Array(C).fill(false));
    const moves = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    const checkRange = (r, c) => r >= 0 && r < R && c >= 0 && c < C;

    let answer = 0;
    let count = 1;

    const dfs = (r, c) => {
      if (!checkRange(r, c) || visited[r][c] || board[r][c] !== '.') {
        return;
      }
      if (r === 0 && c === C - 1) {
        if (count === K) {
          answer++;
        }
        return;
      }
      count++;
      visited[r][c] = true;
      moves.forEach(([dr, dc]) => {
        const [nr, nc] = [dr + r, dc + c];
        dfs(nr, nc);
      });
      count--;
      visited[r][c] = false;
    };

    dfs(R - 1, 0);

    console.log(answer);
  });
