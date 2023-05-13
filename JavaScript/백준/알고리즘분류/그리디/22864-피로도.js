const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    // 풀이
    const [a, b, c, m] = input[0].split(' ').map(Number);
    let f = 0;
    let w = 0;

    for (let i = 0; i < 24; i++) {
      if (m - f < a) {
        f = f - c < 0 ? 0 : f - c;
      } else {
        f += a;
        w += b;
      }
    }
    console.log(w);
  });
