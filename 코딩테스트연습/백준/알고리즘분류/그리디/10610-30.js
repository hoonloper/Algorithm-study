const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = input[0].split('').map(Number);
    const sum = n.reduce((acc, el) => acc + el, 0);

    if (!n.includes(0) || sum % 3 !== 0) {
      console.log('-1');
      return;
    }

    console.log(n.sort((a, b) => b - a).join(''));
  });
