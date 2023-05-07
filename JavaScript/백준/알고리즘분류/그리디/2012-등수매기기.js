const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input[0];
    const count = input
      .slice(1)
      .map(Number)
      .sort((a, b) => a - b)
      .reduce((acc, cur, i) => {
        if (cur !== i + 1) {
          acc += Math.abs(cur - (i + 1));
        }
        return acc;
      }, 0);

    console.log(count);
  });
