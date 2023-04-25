const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [t, ...map] = input.map((el) => el.split(''));
    const N = +t.join('');
    const getCount = (map) => {
      let count = 0;
      for (let i = 0; i < N; i++) {
        let row = 1;
        let col = 1;
        for (let j = 0; j < N; j++) {
          if (j < N - 1 && map[i][j] === map[i][j + 1]) {
            row += 1;
          } else {
            count = Math.max(count, row);
            row = 1;
          }
          if (j < N - 1 && map[j][i] === map[j + 1][i]) {
            col += 1;
          } else {
            count = Math.max(count, col);
            col = 1;
          }
        }
        count = Math.max(count, row, col);
      }
      return count;
    };

    const swapRow = (map, row, col) => {
      [map[row][col], map[row + 1][col]] = [map[row + 1][col], map[row][col]];
    };

    const swapCol = (map, row, col) => {
      [map[row][col], map[row][col + 1]] = [map[row][col + 1], map[row][col]];
    };

    let max = 1;

    for (let i = 0; i < N; i++) {
      if (max === N) break;
      for (let j = 0; j < N; j++) {
        if (max === N) break;
        if (i < N - 1 && map[i][j] !== map[i + 1][j]) {
          swapRow(map, i, j);
          max = Math.max(max, getCount(map));
          swapRow(map, i, j);
        }
        if (j < N - 1 && map[i][j] !== map[i][j + 1]) {
          swapCol(map, i, j);
          max = Math.max(max, getCount(map));
          swapCol(map, i, j);
        }
      }
    }
    max = Math.max(max, getCount(map));
    console.log(max);
  });
