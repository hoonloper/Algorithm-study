function solution(maps) {
  const answer = [];
  const moved = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  maps = maps.map((el) => el.split(''));
  const xLen = maps.length;
  const yLen = maps[0].length;
  const checked = Array.from({ length: xLen }, () => Array(yLen).fill(false));
  const isRange = (x, y) => x >= 0 && x < xLen && y >= 0 && y < yLen;
  for (let x = 0; x < xLen; x++) {
    for (let y = 0; y < yLen; y++) {
      if (maps[x][y] === 'X') {
        continue;
      }
      let sum = 0;
      const queue = [[x, y]];

      while (queue.length) {
        const [xx, yy] = queue.shift();
        sum += +maps[xx][yy];
        maps[xx][yy] = 'X';
        moved.forEach(([dx, dy]) => {
          const [mx, my] = [xx + dx, yy + dy];
          if (isRange(mx, my) && !checked[mx][my] && maps[mx][my] !== 'X') {
            checked[mx][my] = true;
            queue.push([mx, my]);
          }
        });
      }
      answer.push(sum);
    }
  }
  answer.sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}
