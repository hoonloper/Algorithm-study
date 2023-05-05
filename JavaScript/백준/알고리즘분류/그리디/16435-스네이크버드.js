const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    let [n, l] = input[0].split(' ').map(Number);
    const h = input[1]
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    h.forEach((el) => {
      if (el <= l) {
        l++;
      }
    });
    console.log(l);
  });
