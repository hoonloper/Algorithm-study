const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const a = input[0].split('1').filter((el) => el).length;
    const b = input[0].split('0').filter((el) => el).length;

    console.log(Math.min(a, b));
  });
