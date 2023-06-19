const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [a, b] = input.map((el) => el.split(' ').map(Number));

    let scoreA = 0;
    let scoreB = 0;
    let win = 0;
    for (let i = 0; i < a.length; i++) {
      scoreA += a[i];
      if (scoreA > scoreB) {
        win = 1;
      }
      scoreB += b[i];
      if (scoreB > scoreA && win === 1) {
        win = 2;
      }
    }

    console.log(win === 2 ? 'Yes' : 'No');
  });
