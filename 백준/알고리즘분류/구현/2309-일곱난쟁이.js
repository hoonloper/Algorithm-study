const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const arr = input.map((el) => +el);
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (sum - arr[i] - arr[j] === 100) {
          result = [i, j];
          break;
        }
      }
    }
    const answer = [];
    for (let i = 0; i < 9; i++) {
      if (i === result[0] || i === result[1]) {
        continue;
      }
      answer.push(arr[i]);
    }
    console.log(answer.sort((a, b) => a - b).join('\n'));
  });
