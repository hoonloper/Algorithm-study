const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N], arr1, [M], arr2] = input.map((el) => el.split(' ').map(Number));

    arr1.sort((a, b) => a - b);

    const answer = arr2.map((target) => {
      let lt = 0;
      let rt = arr1.length - 1;

      while (lt <= rt) {
        const mid = Math.round((lt + rt) / 2);
        if (arr1[mid] === target) {
          return 1;
        } else if (arr1[mid] > target) {
          rt = mid - 1;
        } else {
          lt = mid + 1;
        }
      }
      return 0;
    });

    console.log(answer.join('\n'));
  });
