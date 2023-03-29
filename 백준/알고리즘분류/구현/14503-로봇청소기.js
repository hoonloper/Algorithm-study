const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input.shift().split(' ').map(Number);
    let [r, c, d] = input.shift().split(' ').map(Number);
    const board = input.map((el) => el.split(' ').map(Number));
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const moves = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];

    let answer = 0;
    let count = 0;

    while (true) {
      if (count === 4) {
        const move = (d + 6) % 4;
        const [backX, backY] = [r + moves[move][0], c + moves[move][1]];
        if (board[backX][backY] === 1) break;
        else {
          r = backX;
          c = backY;
          count = 0;
        }
      }
      if (!visited[r][c]) {
        visited[r][c] = true;
        board[r][c] = 2;
        answer++;
      }
      const move = (d + 3) % 4;
      const [leftX, leftY] = [r + moves[move][0], c + moves[move][1]];
      if (board[leftX][leftY] === 0) {
        r = leftX;
        c = leftY;
        count = 0;
      } else {
        count++;
      }
      d = move;
    }

    console.log(answer);
  });
