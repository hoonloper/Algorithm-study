const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, k] = input[0].split(' ').map(Number);

    let plus = 2;
    let index = 2;
    let count = 0;
    let answer = 0;

    const arr = Array(n + 1).fill(1);

    while (true) {
      if (index > n) {
        plus++;
        index = plus;
        continue;
      }
      if (arr[index]) {
        arr[index] = 0;
        count++;
      }
      if (count === k) {
        answer = index;
        break;
      }
      index += plus;
    }
    console.log(answer);
  });
