const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[t], ...arr] = input.map((el) => el.split(' ').map(Number));

    const dp = Array(t + 1).fill(0);

    const pay = (n) => {
      if (n >= t) {
        return 0;
      }
      if (dp[n]) {
        return dp[n];
      }

      const [time, price] = arr[n];
      dp[n] = Math.max(
        pay(n + 1),
        n + time - 1 < t ? price + pay(n + time) : pay(n + time)
      );
      return dp[n];
    };
    console.log(pay(0));
  });
