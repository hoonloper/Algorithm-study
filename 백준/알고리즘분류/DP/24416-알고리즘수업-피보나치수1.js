const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const num = +input[0];
    let count = 0;
    const fibo1 = (x) => {
      if (x <= 2) {
        count++;
        return 1;
      } else {
        return fibo1(x - 1) + fibo1(x - 2);
      }
    };
    fibo1(num);
    let answer = count + ' ';
    count = 0;
    const memo = [0, 1, 1];

    for (let i = 3; i <= num; i++) {
      count++;
      memo[i] = memo[i - 1] + memo[i - 2];
    }
    console.log(answer + count);
  });
