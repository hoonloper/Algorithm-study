const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[n, m], ...board] = input.map((el) => el.split(' ').map(Number));
    const chicken = [];
    const house = [];
    for (let i = 0; i < n; i++) {
      const data = [...board[i]];
      for (let j = 0; j < n; j++) {
        if (data[j] === 1) {
          house.push([i, j]); // 일반 집
        } else if (data[j] === 2) {
          chicken.push([i, j]);
        }
      }
    }

    const getMinDistance = () => {
      let sum = 0;
      house.forEach(([hx, hy]) => {
        let min = Infinity;
        chicken.forEach((_, index) => {
          if (check[index]) {
            const [cx, cy] = chicken[index];
            min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy));
          }
        });
        sum += min;
      });
      return sum;
    };

    const check = Array.from({ length: chicken.length }, () => false);
    let answer = Infinity;

    const DFS = (idx, cnt) => {
      if (cnt === m) {
        answer = Math.min(answer, getMinDistance());
      } else {
        for (let i = idx; i < chicken.length; i++) {
          if (check[i]) continue;
          check[i] = true;
          DFS(i, cnt + 1);
          check[i] = false;
        }
      }
    };
    DFS(0, 0);

    console.log(answer);
  });
