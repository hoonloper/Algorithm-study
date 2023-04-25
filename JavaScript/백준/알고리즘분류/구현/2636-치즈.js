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
    let answer = Number.MAX_SAFE_INTEGER;
    let year = 0;
    while (true) {
      year++;
      const visited = Array.from({ length: n }, () => Array(m).fill(0));
      const queue = [[0, 0]];
      while (queue.length) {
        const [x, y] = queue.shift();
        visited[x][y] = 1;
        map[x][y] = 2;

        moves.forEach(([nx, ny]) => {
          const [dx, dy] = [nx + x, ny + y];
          if (check(dx, dy) && map[dx][dy] === 0 && !visited[dx][dy]) {
            visited[dx][dy] = 1;
            queue.push([dx, dy]);
          }
        });
      }
      const newMap = map.map((el) => el.slice());

      let before = 0;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (map[i][j] === 1) {
            before++;
          }
        }
      }

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (map[i][j] === 2 || map[i][j] === 0) {
            continue;
          }

          let count = 0;
          moves.forEach(([x, y]) => {
            const [dx, dy] = [i + x, j + y];
            if (check(dx, dy) && map[dx][dy] > 1) {
              count++;
            }
          });
          if (count > 0) {
            newMap[i][j] = 2;
          }
        }
      }
      let after = 0;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (newMap[i][j] === 2) {
            newMap[i][j] = 0;
          }
          if (newMap[i][j] === 1) {
            after++;
          }
        }
      }

      answer = Math.max(before, after);
      if (after === 0) {
        break;
      }
      map = newMap;
    }
    console.log(year);
    console.log(answer);
  });
