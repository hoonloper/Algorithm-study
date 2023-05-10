const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = Number(input[0]);
    const arr = input[1]
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    console.log(arr[Math.floor(n / 2) + (n % 2 ? 0 : -1)]);
  });
