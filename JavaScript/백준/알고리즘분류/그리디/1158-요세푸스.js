const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input[0].split(' ').map(Number);

    const arr = Array.from({ length: n }, (_, i) => i + 1);
    const result = [];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        arr.push(arr.shift());
      }
      result.push(arr.pop());
    }

    console.log('<' + result.join(', ') + '>');
  });
