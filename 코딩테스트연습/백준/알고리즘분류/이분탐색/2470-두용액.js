const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N], array] = input.map((el) => el.split(' ').map(Number));
    array.sort((a, b) => a - b);
    const answer = Array(2).fill(0);

    let lt = 0;
    let rt = N - 1;
    let min = Number.MAX_SAFE_INTEGER;

    while (lt < rt) {
      const sum = array[lt] + array[rt];

      if (sum === 0) {
        answer[0] = array[lt];
        answer[1] = array[rt];
        break;
      }

      if (Math.abs(min) > Math.abs(sum)) {
        min = sum;
        answer[0] = array[lt];
        answer[1] = array[rt];
      }

      if (lt + 1 < rt) {
        const next1 = Math.abs(array[lt + 1] + array[rt]);
        const next2 = Math.abs(array[lt] + array[rt - 1]);
        next1 < next2 ? lt++ : rt--;
      } else {
        lt++;
      }
    }

    console.log(answer.sort((a, b) => a - b).join(' '));
  });
