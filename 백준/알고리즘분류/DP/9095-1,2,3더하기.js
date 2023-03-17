const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [t, ...numbers] = input.map(Number);

    const answer = numbers.reduce((acc, cur) => {
      let count = 0;
      const dfs = (x) => {
        if (x > cur) {
          return;
        } else if (x === cur) {
          count++;
          return;
        } else {
          for (let i = 1; i <= 3; i++) {
            dfs(x + i);
          }
        }
      };
      dfs(0);

      acc.push(count);
      return acc;
    }, []);
    console.log(answer.join('\n'));
  });
