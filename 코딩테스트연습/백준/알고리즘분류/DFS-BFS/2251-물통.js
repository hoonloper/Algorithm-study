const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [A, B, C] = input[0].split(' ').map(Number);
    const answer = [];
    const check = Array.from({ length: 201 }, () => Array(201).fill(0));

    const queue = [[0, 0, C]];

    while (queue.length) {
      const [curA, curB, curC] = queue.shift();

      if (check[curA][curB]) continue;
      check[curA][curB] = 1;
      if (curA === 0) answer.push(curC);

      if (curA + curB > B) {
        queue.push([curA + curB - B, B, curC]);
      } else {
        queue.push([0, curA + curB, curC]);
      }

      if (curA + curC > C) {
        queue.push([curA + curC - C, curB, C]);
      } else {
        queue.push([0, curB, curA + curC]);
      }

      if (curB + curC > C) {
        queue.push([curA, curB + curC - C, C]);
      } else {
        queue.push([curA, 0, curB + curC]);
      }

      if (curB + curA > A) {
        queue.push([A, curB + curA - A, curC]);
      } else {
        queue.push([curB + curA, 0, curC]);
      }

      if (curC + curB > B) {
        queue.push([curA, B, curC + curB - B]);
      } else {
        queue.push([curA, curC + curB, 0]);
      }

      if (curC + curA > A) {
        queue.push([A, curB, curC + curA - A]);
      } else {
        queue.push([curC + curA, curB, 0]);
      }
    }

    console.log(answer.sort((a, b) => a - b).join(' '));
  });
