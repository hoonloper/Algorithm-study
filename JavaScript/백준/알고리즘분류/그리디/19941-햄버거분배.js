const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, k] = input[0].split(' ').map(Number);
    const arr = input[1].split('');

    let count = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] === 'P') {
        for (let j = i - k; j <= i + k; j++) {
          if (arr[j] === 'H') {
            arr[j] = 'X';
            count++;
            break;
          }
        }
      }
    }
    console.log(count);
  });
