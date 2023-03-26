const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[T], ...arr] = input.map((el) => el.split(' '));

    arr.forEach((el, i) => {
      const [num, ...scores] = el.map(Number);

      const max = Math.max(...scores);
      const min = Math.min(...scores);
      scores.sort((a, b) => a - b);
      let gap = 0;
      for (let i = 1; i < num; i++) {
        gap = Math.max(gap, scores[i] - scores[i - 1]);
      }
      console.log(`Class ${i + 1}`);
      console.log(`Max ${max}, Min ${min}, Largest gap ${gap}`);
    });
  });
