const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input.shift().split(' ').map(Number);
    const arr = input.slice();

    let intersection = '';
    let count = 0;

    for (let i = 0; i < m; i++) {
      const alphabet = Array(26).fill(0);

      for (let j = 0; j < n; j++) {
        alphabet[arr[j][i].charCodeAt(0) - 65] += 1;
      }

      intersection += String.fromCharCode(
        alphabet.indexOf(Math.max(...alphabet)) + 65
      );
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[i][j] != intersection[j]) {
          count += 1;
        }
      }
    }

    console.log(intersection);
    console.log(count);
  });
