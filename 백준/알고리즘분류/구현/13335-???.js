const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, w, L] = input.shift().split(' ').map(Number);
    const truck = input[0].split(' ').map(Number);

    const queue = [];
    let time = 0;
    let ans = 0;
    for (let i = 0; i < n; i++) {
      while (true) {
        if (queue.length === w) {
          time -= queue.shift();
        }
        if (time + truck[i] <= L) break;
        queue.push(0);
        ans++;
      }
      queue.push(truck[i]);
      time += truck[i];
      ans++;
    }
    console.log(ans + w);
  });
