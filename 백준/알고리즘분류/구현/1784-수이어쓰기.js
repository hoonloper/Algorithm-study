const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input[0];
    let num = 1;
    let d = 10;
    let count = 1;
    let result = 0;
    while (num <= n) {
      if (Math.floor(num / d) === 0) {
        num++;
        result += count;
      } else {
        d *= 10;
        count++;
      }
    }
    console.log(result);
  });
