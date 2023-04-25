const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input[0];
    const fibos = [BigInt(0), BigInt(1)];

    for (let i = 2; i <= 91; i++) {
      fibos[i] = BigInt(fibos[i - 1]) + BigInt(fibos[i - 2]);
    }

    console.log(fibos[n].toString());
  });
