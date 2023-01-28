const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const T = +input.shift();
    const answer = [];
    for (let x = 0; x < T; x++) {
      const N = +input.shift();
      const arr1 = input.shift().split(' ').map(Number);
      const M = +input.shift();
      const arr2 = input.shift().split(' ').map(Number);

      arr1.sort((a, b) => a - b);

      arr2.map((target) => {
        let lt = 0;
        let rt = N - 1;

        while (lt <= rt) {
          const mid = Math.floor((lt + rt) / 2);

          if (arr1[mid] === target) {
            answer.push(1);
            return;
          } else if (arr1[mid] > target) {
            rt = mid - 1;
          } else {
            lt = mid + 1;
          }
        }

        answer.push(0);
      });
    }
    console.log(answer.join('\n'));
  });
