const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [e, s, m] = input.shift().split(' ').map(Number);
    let year = 1;

    while (true) {
      if (
        (year - e) % 15 === 0 &&
        (year - s) % 28 === 0 &&
        (year - m) % 19 === 0
      ) {
        console.log(year);
        break;
      }
      year++;
    }
  });
