function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;
  const moves = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  const checkRange = (n, m) => n >= 0 && n < N && m >= 0 && m < M;

  const queue = [[0, 0, 1]];
  maps[0][0] = 0;

  while (queue.length) {
    const [x, y, count] = queue.shift();
    if (x === N - 1 && y === M - 1) {
      return count;
    }
    for (const [dx, dy] of moves) {
      const [nx, ny, cnt] = [dx + x, dy + y, count + 1];
      if (checkRange(nx, ny) && maps[nx][ny] === 1) {
        maps[nx][ny] = 0;
        queue.push([nx, ny, cnt]);
      }
    }
  }

  return -1;
}
