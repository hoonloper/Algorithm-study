const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    // 풀이
    let n = +input.shift();
    let arr = input.map((el) => el.split(' ').map(Number));
    while (n > 1) {
      const a = [];
      for (let i = 0; i < n; i += 2) {
        const nums = [];
        for (let j = 0; j < n; j += 2) {
          const t = [
            arr[i][j],
            arr[i + 1][j],
            arr[i][j + 1],
            arr[i + 1][j + 1],
          ].sort((a, b) => b - a);
          nums.push(t[1]);
        }
        a.push(nums);
      }
      arr = a;
      n /= 2;
    }
    console.log(arr[0][0]);
  });
