const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const t = Number(input.shift());
    for (let i = 0; i < t * 3; i += 3) {
      const [a, b] = input[i].split(' ').map(Number);
      const arrayA = input[i + 1]
        .split(' ')
        .map(Number)
        .sort((a, b) => b - a);
      const arrayB = input[i + 2]
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b);

      let count = 0;

      for (let x = 0; x < arrayA.length; x++) {
        for (let z = 0; z < arrayB.length; z++) {
          if (arrayA[x] > arrayB[z]) count++;
          else break;
        }
      }
      console.log(count);
    }
  });
