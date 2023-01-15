const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [nc, ...array] = input;
    const [N, C] = nc.split(' ').map(Number);
    const arr = array.map(Number).sort((a, b) => a - b);

    let lt = 1;
    let rt = arr[arr.length - 1];

    const calDis = (arr, mid) => {
      let count = 1;
      let curPos = arr[0];

      for (const pos of arr) {
        if (pos - curPos >= mid) {
          count++;
          curPos = pos;
        }
      }

      return count;
    };

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);

      if (calDis(arr, mid) >= C) {
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }

    console.log(rt);
  });
