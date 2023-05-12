const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const board = input.map((v) => v.split(''));
    const n = board.length;
    const m = board[0].length;
    const check = (x, y) => x >= 0 && x < n && y >= 0 && y < m;
    const moves = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    let answer = 0;
    while (true) {
      let index = -1;
      const dis = [];
      const visited = Array.from({ length: n }, () => Array(m).fill(false));
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (board[i][j] === '.') {
            continue;
          }
          const target = board[i][j];
          index++;
          dis[index] = [[i, j]];
          const queue = [[i, j]];
          visited[i][j] = true;

          while (queue.length) {
            const [x, y] = queue.shift();

            for (const [dx, dy] of moves) {
              const nx = x + dx;
              const ny = y + dy;

              if (
                check(nx, ny) &&
                !visited[nx][ny] &&
                board[nx][ny] === target
              ) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                dis[index].push([nx, ny]);
              }
            }
          }
          if (dis[index].length < 4) {
            dis.pop();
            index--;
          }
        }
      }
      if (dis.length === 0) {
        break;
      }
      for (let i = 0; i < dis.length; i++) {
        if (dis[i].length >= 4) {
          dis[i].forEach(([x, y]) => {
            board[x][y] = '.';
          });
          for (let i = 0; i < m; i++) {
            for (let j = n - 1; j >= 0; j--) {
              if (board[j][i] !== '.') {
                for (let k = n - 1; k > j; k--) {
                  if (board[k][i] == '.') {
                    let tmp = board[k][i];
                    board[k][i] = board[j][i];
                    board[j][i] = tmp;
                    break;
                  }
                }
              }
            }
          }
        }
      }
      answer++;
    }

    console.log(answer);
  });
