const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N, M, B], ...map] = input.map((el) => el.split(' ').map(Number));

    const height = Array.from({ length: 257 }, () => 0);
    let min = Number.MAX_SAFE_INTEGER;
    let maxHeight = 0;
    map.forEach((m) => m.forEach((n) => height[n]++));

    for (let i = 256; i >= 0; i--) {
      let time = 0;
      let block = B;
      height.forEach((h, idx) => {
        block += h * (idx - i);
        if (i > idx) {
          time += (i - idx) * h;
        } else {
          time += (idx - i) * 2 * h;
        }
      });
      if (min < time) break;
      if (block < 0) continue;
      if (time < min) {
        min = time;
        maxHeight = i;
      }
    }
    console.log(min, maxHeight);
  });
