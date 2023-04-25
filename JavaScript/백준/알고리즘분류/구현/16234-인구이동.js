const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, l, r] = input.shift().split(' ').map(Number);
    const map = input.map((el) => el.split(' ').map(Number));
    const max = Math.max(l, r);
    const min = Math.min(l, r);

    const moves = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];
    const check = (x, y) => x >= 0 && x < n && y >= 0 && y < n;
    const rangeCheck = (nx, ny, mx, my, map) =>
      min <= Math.abs(map[nx][ny] - map[mx][my]) &&
      Math.abs(map[nx][ny] - map[mx][my]) <= max;
    const bfs = (x, y, checked) => {
      const queue = [[x, y]];
      const path = [[x, y]];
      let sum = map[x][y];
      let count = 1;
      checked[x][y] = true;

      while (queue.length) {
        const [nx, ny] = queue.shift();

        moves.forEach(([dx, dy]) => {
          const [mx, my] = [nx + dx, ny + dy];
          if (
            check(mx, my) &&
            !checked[mx][my] &&
            rangeCheck(nx, ny, mx, my, map)
          ) {
            checked[mx][my] = true;
            queue.push([mx, my]);
            path.push([mx, my]);
            sum += map[mx][my];
            count++;
          }
        });
      }
      const num = Math.floor(sum / count);
      path.forEach(([i, j]) => {
        map[i][j] = num;
      });
      return count;
    };

    let move = 0;
    while (1) {
      const checked = Array.from({ length: n }, () => Array(n).fill(0));
      let flag = false;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (!checked[i][j]) {
            const count = bfs(i, j, checked);
            if (count > 1) {
              flag = true;
            }
          }
        }
      }
      if (!flag) {
        break;
      }
      move++;
    }
    console.log(move);
  });
