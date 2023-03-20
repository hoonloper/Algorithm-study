const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [t, ...numbers] = input.map(Number);

    const answer = numbers
      .map((num) => {
        const dp = [0, 1, 1, 1];
        for (let i = 3; i <= num; i++) {
          dp[i] = dp[i - 2] + dp[i - 3];
        }
        return dp[num];
      })
      .join('\n');

    console.log(answer);
  });
