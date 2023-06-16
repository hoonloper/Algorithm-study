const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [m, n] = input.shift().split(' ').map(Number);
    const target = +input.shift();

    const arr = Array.from({ length: n }, () => Array(m).fill(0));

    const moves = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    let x = 0;
    let y = 0;
    let count = 1;
    let dir = 0;

    while (count <= m * n) {
      arr[y][x] = count;
      if (count === target) {
        break;
      }
      count++;
      const nx = x + moves[dir][1];
      const ny = y + moves[dir][0];
      if (nx < 0 || ny < 0 || nx >= m || ny >= n || arr[ny][nx] !== 0) {
        dir = dir + 1 > 3 ? 0 : dir + 1;
      }
      x += moves[dir][1];
      y += moves[dir][0];
    }

    if (count !== target) {
      console.log(0);
      return;
    }
    console.log(`${x + 1} ${y + 1}`);
  });
