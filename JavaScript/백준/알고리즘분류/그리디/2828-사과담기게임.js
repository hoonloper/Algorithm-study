const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input[0].split(' ').map(Number);
    const size = m - 1;
    const arr = input.slice(2).map(Number);

    let left = 0;
    let right = size;
    const count = arr.reduce((acc, cur, i) => {
      let tmp = cur - 1;
      if (tmp > right) {
        acc += tmp - right;
        right = tmp;
        left = tmp - size;
      } else if (tmp < left) {
        acc += left - tmp;
        left = tmp;
        right = tmp + size;
      }
      return acc;
    }, 0);

    console.log(count);
  });
