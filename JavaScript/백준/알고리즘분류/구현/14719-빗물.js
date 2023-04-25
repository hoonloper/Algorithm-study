const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    const [n, m] = input.shift().split(' ').map(Number);
    const arr = input.shift().split(' ').map(Number);
    let answer = 0;

    for (let i = 1; i < arr.length; i++) {
      let left = -1;
      let right = -1;

      for (let j = i; j >= 0; j--) {
        left = Math.max(left, arr[j]);
      }
      for (let j = i; j < arr.length; j++) {
        right = Math.max(right, arr[j]);
      }

      answer += Math.min(left, right) - arr[i];
    }

    console.log(answer);
  });
