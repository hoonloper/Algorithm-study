const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    // 풀이
    const [N, ...arr] = input;
    const ableArr = arr.map((el) => el.split(''));
    const disableArr = arr.map((el) => el.split(''));
    const moves = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    let answer = '';
    let redCount = 0;
    let blueCount = 0;
    let greenCount = 0;

    // DFS
    const DFS = (x, y, alpha, array) => {
      array[y][x] = '';

      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (
          nx >= 0 &&
          nx < +N &&
          ny >= 0 &&
          ny < +N &&
          alpha.includes(array[ny][nx])
        ) {
          array[ny][nx] = '';
          DFS(nx, ny, alpha, array);
        }
      }
    };
    for (let y = 0; y < +N; y++) {
      for (let x = 0; x < +N; x++) {
        if (p === 0) {
          if (!alphas.includes(case1[y][x])) continue;

          if (case1[y][x] === 'R') {
            redCount++;
            DFS(x, y, ['R'], case1);
          } else if (case1[y][x] === 'G') {
            greenCount++;
            DFS(x, y, ['G'], case1);
          } else {
            blueCount++;
            DFS(x, y, ['B'], case1);
          }
        } else {
          if (!alphas.includes(case2[y][x])) continue;

          if (case2[y][x] === 'B') {
            blueCount++;
            DFS(x, y, ['B'], case2);
          } else {
            redGreenCount++;
            DFS(x, y, ['R', 'G'], case2);
          }
        }
      }
    }

    // BFS
    const BFS = (y, x, alpha, array) => {
      const queue = [[y, x]];

      while (queue.length) {
        const [y, x] = queue.shift();
        if (x >= 0 && x < +N && y >= 0 && y < +N && array[y][x] === alpha) {
          array[y][x] = '';
          moves.forEach(([dx, dy]) => {
            const [nx, ny] = [dx + x, dy + y];
            queue.push([ny, nx]);
          });
        }
      }
    };

    for (let y = 0; y < +N; y++) {
      for (let x = 0; x < +N; x++) {
        if (!ableArr[y][x]) continue;
        if (ableArr[y][x] === 'B') {
          blueCount++;
          BFS(y, x, 'B', ableArr);
        } else if (ableArr[y][x] === 'R') {
          redCount++;
          BFS(y, x, 'R', ableArr);
        } else {
          greenCount++;
          BFS(y, x, 'G', ableArr);
        }
      }
    }

    answer += blueCount + redCount + greenCount;

    redCount = 0;
    blueCount = 0;
    // 적록색약인 경우 빨강,초록 색깔통합시켜주기
    for (let y = 0; y < +N; y++) {
      for (let x = 0; x < +N; x++) {
        if (disableArr[y][x] === 'G') disableArr[y][x] = 'R';
      }
    }

    for (let y = 0; y < +N; y++) {
      for (let x = 0; x < +N; x++) {
        if (!disableArr[y][x]) continue;
        if (disableArr[y][x] === 'B') {
          blueCount++;
          BFS(y, x, 'B', disableArr);
        } else {
          redCount++;
          BFS(y, x, 'R', disableArr);
        }
      }
    }
    answer += ' ' + (blueCount + redCount);

    console.log(answer);
  });
