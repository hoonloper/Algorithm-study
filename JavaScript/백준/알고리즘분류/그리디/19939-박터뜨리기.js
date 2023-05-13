const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, k] = input[0].split(' ').map(Number);
    const sum = Math.floor((k * (k + 1)) / 2);
    if (sum > n) {
      console.log(-1);
      return;
    }
    if ((n - sum) % k === 0) {
      console.log(k - 1);
      return;
    } else {
      console.log(k);
    }
  });
