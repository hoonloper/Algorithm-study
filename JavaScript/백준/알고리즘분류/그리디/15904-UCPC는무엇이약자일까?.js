const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const str = input[0];
    const alphas = ['U', 'C', 'P', 'C'];
    let count = 0;
    for (const s of str) {
      if (s === alphas[count]) {
        count++;
      }

      if (count === 4) {
        break;
      }
    }

    console.log(`I ${count === 4 ? 'love' : 'hate'} UCPC`);
  });
