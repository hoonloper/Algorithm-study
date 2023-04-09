const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    let [r, c, t] = input.shift().split(' ').map(Number);
    let map = input.map((el) => el.split(' ').map(Number));
    const moves = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    const check = (x, y) => x >= 0 && x < r && y >= 0 && y < c;
    while (t) {
      t--;
      const copyMap = map.map((el) => el.slice());
      const clean = [];
      const xy = [];
      for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
          if (map[i][j] <= 0) {
            if (map[i][j] === -1) {
              clean.push([i, j]);
            }
            continue;
          }
          let count = 0;
          const location = [];
          moves.forEach(([x, y]) => {
            const [dx, dy] = [i + x, j + y];
            if (check(dx, dy) && map[dx][dy] !== -1) {
              location.push([dx, dy]);
              count++;
            }
          });
          if (count === 0) {
            continue;
          }
          const m = Math.floor(map[i][j] / 5);
          location.forEach(([x, y]) => {
            if (map[x][y] > 0) {
              xy.push([x, y, m]);
              return;
            }
            copyMap[x][y] += m;
          });
          copyMap[i][j] = map[i][j] - m * count;
        }
      }

      xy.forEach(([x, y, m]) => {
        copyMap[x][y] += m;
      });

      const copyMap2 = copyMap.map((el) => el.slice());
      const [topX, topY] = clean[0];
      for (let i = topX; i > 0; i--) {
        if (copyMap[i][0] === -1) {
          continue;
        }
        copyMap2[i][0] = copyMap[i - 1][0];
      }
      for (let i = 0; i < topX; i++) {
        copyMap2[i][c - 1] = copyMap[i + 1][c - 1];
      }
      for (let i = 0; i < c - 1; i++) {
        copyMap2[0][i] = copyMap[0][i + 1];
      }
      for (let i = c - 1; i > 0; i--) {
        if (copyMap[topX][i - 1] === -1) {
          copyMap2[topX][i] = 0;
          continue;
        }
        copyMap2[topX][i] = copyMap[topX][i - 1];
      }

      const [topX2, topY2] = clean[1];
      for (let i = 0; i < c - 1; i++) {
        copyMap2[r - 1][i] = copyMap[r - 1][i + 1];
      }
      for (let i = c - 1; i > 0; i--) {
        if (copyMap[topX2][i - 1] === -1) {
          copyMap2[topX2][i] = 0;
          continue;
        }
        copyMap2[topX2][i] = copyMap[topX2][i - 1];
      }

      for (let i = topX2; i < r - 1; i++) {
        if (copyMap[i][0] === -1) {
          continue;
        }
        copyMap2[i][0] = copyMap[i + 1][0];
      }
      for (let i = r - 1; i > topX2; i--) {
        copyMap2[i][c - 1] = copyMap[i - 1][c - 1];
      }

      map = copyMap2;
    }
    let result = 0;

    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (map[i][j] === -1 || map[i][j] === 0) {
          continue;
        }
        result += map[i][j];
      }
    }
    console.log(result);
  });
