const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = Number(input.shift());
    const arr = input.map(Number).sort((a, b) => b - a);

    const tip = arr.reduce((acc, cur, i) => {
      return cur - i >= 0 ? acc + (cur - i) : acc;
    }, 0);
    console.log(tip);
  });
