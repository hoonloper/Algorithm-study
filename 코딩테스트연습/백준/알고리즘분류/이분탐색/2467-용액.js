const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N], arr] = input.map((el) => el.split(' ').map(Number));
    arr.sort((a, b) => a - b);

    const answer = Array(2).fill(0);
    let lt = 0;
    let rt = N - 1;
    let min = Number.MAX_SAFE_INTEGER;

    while (lt < rt) {
      let sum = arr[lt] + arr[rt];

      if (sum === 0) {
        answer[0] = arr[lt];
        answer[1] = arr[rt];
        break;
      }

      if (Math.abs(min) > Math.abs(sum)) {
        min = sum;
        answer[0] = arr[lt];
        answer[1] = arr[rt];
      }

      if (lt + 1 < rt) {
        const n1 = Math.abs(arr[lt + 1] + arr[rt]);
        const n2 = Math.abs(arr[lt] + arr[rt - 1]);
        n1 < n2 ? lt++ : rt--;
      } else {
        lt++;
      }
    }

    console.log(answer.sort((a, b) => a - b).join(' '));
  });
