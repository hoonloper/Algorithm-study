const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input.shift().split(' ').map(Number);
    const a = input.slice(0, n);
    const b = input.slice(n, n + m);

    const remember = {};
    a.forEach((el) => {
      remember[el] = 1;
    });
    const result = [];
    const count = b.reduce((acc, el) => {
      if (remember[el]) {
        acc++;
        result.push(el);
      }
      return acc;
    }, 0);

    console.log(
      count + '\n' + result.sort((a, b) => a.localeCompare(b)).join('\n')
    );
  });
