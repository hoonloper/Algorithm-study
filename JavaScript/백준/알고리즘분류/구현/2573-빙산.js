const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    let [n, m] = input.shift().split(' ').map(Number);
    let map = input.map((el) => el.split(' ').map(Number));
    const moves = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    const check = (x, y) => x >= 0 && x < n && y >= 0 && y < m;
    let year = 0;
    while (true) {
      year++;
      const newMap = map.map((el) => [...el]);

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (map[i][j] === 0) {
            continue;
          }
          let count = 0;

          moves.forEach(([x, y]) => {
            const [dx, dy] = [x + i, y + j];
            if (check(dx, dy) && map[dx][dy] === 0) {
              count++;
            }
          });
          newMap[i][j] -= count;
          if (newMap[i][j] < 0) {
            newMap[i][j] = 0;
          }
        }
      }

      const visited = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
      let count = 0;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (newMap[i][j] === 0 || visited[i][j]) {
            continue;
          }
          dfs(i, j);
          count++;
        }
      }
      if (count >= 2) {
        break;
      }
      let flag = false;
      for (let i = 0; i < n; i++) {
        if (flag) {
          break;
        }
        for (let j = 0; j < m; j++) {
          if (newMap[i][j]) {
            flag = true;
            break;
          }
        }
      }
      if (!flag) {
        year = 0;
        break;
      }
      map = newMap;
      function dfs(x, y) {
        if (check(x, y) && !visited[x][y] && newMap[x][y]) {
          visited[x][y] = 1;
          moves.forEach(([nx, ny]) => {
            const [dx, dy] = [nx + x, ny + y];
            dfs(dx, dy);
          });
        }
      }
    }
    console.log(year);
  });
