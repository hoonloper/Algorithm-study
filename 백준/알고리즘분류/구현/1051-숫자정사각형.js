const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input.shift().split(' ').map(Number);
    const arr = [...input.map((el) => el.slice())];

    let max = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        for (let z = 1; i + z < n && j + z < m; z++) {
          const p = arr[i][j];
          if (
            p === arr[i + z][j] &&
            p === arr[i][j + z] &&
            p === arr[i + z][j + z]
          ) {
            max = Math.max(max, z);
          }
        }
      }
    }
    console.log((max + 1) ** 2);
  });
