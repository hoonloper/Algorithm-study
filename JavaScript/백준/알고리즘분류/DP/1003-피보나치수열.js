const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [t, ...numbers] = input.map(Number);
    const zero = [1, 0, 1, 1];
    const one = [0, 1, 1, 2];

    for (let i = 2; i < 41; i++) {
      zero[i] = zero[i - 1] + zero[i - 2];
      one[i] = one[i - 1] + one[i - 2];
    }
    numbers.forEach((el) => console.log(zero[el] + ' ' + one[el]));
  });
