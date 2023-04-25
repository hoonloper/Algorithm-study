const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input.shift();
    const k = +input.shift();
    const apples = [];

    for (let i = 0; i < k; i++) {
      apples.push(input.shift().split(' ').map(Number));
    }

    const x = +input.shift();
    const times = input.map((el) => el.split(' '));

    const board = Array.from({ length: n }, () => Array(n).fill(0));
    apples.forEach(([x, y]) => {
      board[x - 1][y - 1] = 2;
    });
    const moves = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    let head = [0, 0];
    let tail = [0, 0];
    let curTime = 0;
    let curDir = 0;
    let changeTime = +times[0][0];
    const remember = [];

    const plusHead = (nx, ny) => {
      head[0] = nx;
      head[1] = ny;
      board[nx][ny] = 1;
      remember.push([nx, ny]);
    };
    while (true) {
      const nx = head[0] + moves[curDir][0];
      const ny = head[1] + moves[curDir][1];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
        break;
      } else if (board[nx][ny] === 1) {
        break;
      } else {
        if (board[nx][ny] === 2) {
          plusHead(nx, ny);
        } else if (board[nx][ny] === 0) {
          plusHead(nx, ny);
          board[tail[0]][tail[1]] = 0;
          [tail[0], tail[1]] = remember.shift();
        }
      }
      curTime++;

      if (changeTime === curTime) {
        const [t, m] = times.shift();
        if (m === 'D') {
          curDir = (curDir + 1) % 4;
        } else if (m === 'L') {
          if (curDir - 1 < 0) curDir = 3;
          else curDir = (curDir - 1) % 4;
        }
        if (times.length === 0) {
          changeTime = 0;
        } else {
          changeTime = +times[0][0];
        }
      }
    }
    console.log(curTime + 1);
  });
