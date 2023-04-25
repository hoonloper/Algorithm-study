const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, k] = input.shift().split(' ').map(Number);
    const a = input.slice(0, n);
    const b = input.slice(n, n + k);

    const obj = {};

    a.forEach((el) => {
      obj[el] = 1;
    });

    const result = b.reduce((acc, cur) => {
      if (obj[cur]) {
        acc++;
      }
      return acc;
    }, 0);
    console.log(result);
  });
