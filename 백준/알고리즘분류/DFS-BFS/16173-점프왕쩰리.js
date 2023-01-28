const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N], ...graph] = input.map((el) => el.split(' ').map(Number));
    const check = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
    let answer = 'Hing';

    const queue = [[0, 0]];

    while (queue.length) {
      const [x, y] = queue.shift();
      const v = graph[x][y];
      if (v === -1) {
        answer = 'HaruHaru';
        break;
      }
      if (x + v < N && !check[x + v][y]) {
        queue.push([x + v, y]);
        check[x + v][y] = true;
      }
      if (y + v < N && !check[x][y + v]) {
        queue.push([x, y + v]);
        check[x][y + v] = true;
      }
    }

    console.log(answer);
  });
