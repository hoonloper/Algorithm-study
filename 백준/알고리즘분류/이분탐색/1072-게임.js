const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [X, Y] = input[0].split(' ').map(Number);
    const z = Math.floor((Y * 100) / X);
    if (z >= 99) {
      console.log(-1);
    } else {
      const newZ = z + 1;
      let result = (100 * Y - newZ * X) / (newZ - 100);
      console.log(Math.ceil(result));
    }
  });
