const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [A, B] = input[0].split(' ').map(Number);

    const queue = [[A, 1]];
    while (true) {
      if (!queue.length) {
        console.log(-1);
        break;
      }
      const [num, count] = queue.shift();
      if (num === B) {
        console.log(count);
        break;
      }
      if (num * 2 <= B) {
        queue.push([num * 2, count + 1]);
      }
      if (+(num + '1') <= B) {
        queue.push([+(num + '1'), count + 1]);
      }
    }
  });
