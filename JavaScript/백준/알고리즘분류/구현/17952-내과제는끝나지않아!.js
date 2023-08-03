const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [t, ...arr] = input.map((el) => el);
    const a = arr.map((el) => el.split(' ').map(Number));

    const stack = [];
    const total = a.forEach((total, [is, score, time]) => {
      if (is === 1) {
        stack.push([score, time - 1]);
      }
      const len = stack.length;
      if (!len) {
        return total;
      }

      stack[len - 1][1]--;
      if (stack[len - 1][1] === 0) {
        const [score, time] = stack.pop();
        total += score;
      }
      return total;
    }, 0);
    console.log(total);
  });
