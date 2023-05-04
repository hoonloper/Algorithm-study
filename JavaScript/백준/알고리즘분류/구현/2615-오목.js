const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const board = input.map((el) => el.split(' ').map(Number));

    let ans = 0;
    const xy = [];

    const moves = [
      [0, 1],
      [1, 0],
      [1, 1],
      [-1, 1],
    ];
    const check = (x, y) => x >= 0 && x < 19 && y >= 0 && y < 19;

    const bfs = (x, y, target) => {
      for (let i = 0; i < moves.length; i++) {
        const [dx, dy] = moves[i];
        let nx = x + dx;
        let ny = y + dy;
        let cnt = 1;

        while (1) {
          if (!check(nx, ny) || board[nx][ny] !== target) break;
          cnt++;
          nx += dx;
          ny += dy;
        }
        if (cnt === 5) {
          let curX = x - dx;
          let curY = y - dy;
          if (check(curX, curY) && board[curX][curY] === target) {
            continue;
          }
          ans = target;
          xy.push(x, y);
          return;
        }
      }
    };
    for (let i = 0; i < 19; i++) {
      for (let j = 0; j < 19; j++) {
        if (board[i][j] === 0) {
          continue;
        }
        bfs(i, j, board[i][j]);
        if (ans > 0) {
          console.log(ans + '\n' + (xy[0] + 1) + ' ' + (xy[1] + 1));
          return;
        }
      }
    }

    console.log(0);
  });
