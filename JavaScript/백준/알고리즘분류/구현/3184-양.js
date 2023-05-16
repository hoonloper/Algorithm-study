const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input.shift().split(' ').map(Number);
    const board = input.map((el) => el.split(''));

    const move = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    const check = (x, y) => x >= 0 && x < n && y >= 0 && y < m;
    const checked = Array.from(Array(n), () => Array(m).fill(false));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === '#') continue;
        let _lamb = 0;
        let _wolf = 0;
        const lambs = [];
        const wolfs = [];
        if (board[i][j] === 'o') {
          _lamb++;
          lambs.push([i, j]);
        } else if (board[i][j] === 'v') {
          _wolf++;
          wolfs.push([i, j]);
        }
        const queue = [[i, j]];
        checked[i][j] = true;
        while (queue.length) {
          const [x, y] = queue.shift();
          move.forEach(([dx, dy]) => {
            const [nx, ny] = [x + dx, y + dy];
            if (check(nx, ny) && !checked[nx][ny] && board[nx][ny] !== '#') {
              checked[nx][ny] = true;
              queue.push([nx, ny]);
              if (board[nx][ny] === 'o') {
                _lamb++;
                lambs.push([nx, ny]);
              } else if (board[nx][ny] === 'v') {
                _wolf++;
                wolfs.push([nx, ny]);
              }
            }
          });
        }
        if (_lamb > _wolf) {
          wolfs.forEach(([x, y]) => (board[x][y] = '.'));
        } else {
          lambs.forEach(([x, y]) => (board[x][y] = '.'));
        }
      }
    }

    let lamb = 0;
    let wolf = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === '#' || board[i][j] === '.') continue;
        if (board[i][j] === 'o') lamb++;
        else if (board[i][j] === 'v') wolf++;
      }
    }

    console.log(lamb, wolf);
  });
