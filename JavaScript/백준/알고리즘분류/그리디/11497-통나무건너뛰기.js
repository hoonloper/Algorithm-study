const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const t = Number(input.shift());
    for (let i = 0; i < t * 2; i += 2) {
      const n = Number(input[i]);
      const arr = input[i + 1]
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b);

      let max = 0;
      for (let i = 0; i < n - 2; i++) {
        max = Math.max(max, Math.abs(arr[i] - arr[i + 2]));
      }
      console.log(max);
    }
  });
