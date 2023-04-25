const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const str = input[0]
      .split('')
      .sort((a, b) => +b - +a)
      .join('');
    console.log(str);
  });
