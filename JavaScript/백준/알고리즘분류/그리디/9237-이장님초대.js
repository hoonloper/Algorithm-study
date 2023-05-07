const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input[0];
    const arr = input[1]
      .split(' ')
      .map(Number)
      .sort((a, b) => b - a);
    let count = 0;

    for (let i = 0; i < n; i++) {
      count = Math.max(count, arr[i] + i + 1);
    }
    count++;
    console.log(count);
  });
