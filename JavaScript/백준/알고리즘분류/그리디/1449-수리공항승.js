const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input.shift().split(' ').map(Number);
    const arr = input
      .shift()
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    let start = arr.shift();
    const count = arr.reduce((acc, cur) => {
      if (0.5 + cur + 0.5 - start > m) {
        start = cur;
        acc += 1;
      }
      return acc;
    }, 1);

    console.log(count);
  });
