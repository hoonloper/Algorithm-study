function solution(maps) {
  let start;
  let lever;

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === 'S') {
        start = [i, j];
      } else if (maps[i][j] === 'L') {
        lever = [i, j];
      }
    }
    if (start && lever) {
      break;
    }
  }
  const check = (x, y) =>
    x >= 0 && x < maps.length && y >= 0 && y < maps[0].length;
  const moves = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const bfs = (map, start, target) => {
    const visited = Array.from({ length: map.length }, () =>
      Array(map[0].length).fill(false)
    );
    const queue = [start];
    visited[start[0]][start[1]] = true;
    let count = 0;
    while (queue.length) {
      const qLength = queue.length;
      for (let i = 0; i < qLength; i++) {
        const [x, y] = queue.shift();
        if (map[x][y] === target) {
          return count;
        }
        moves.forEach(([nx, ny]) => {
          const [dx, dy] = [x + nx, y + ny];
          if (check(dx, dy) && !visited[dx][dy] && map[dx][dy] !== 'X') {
            visited[dx][dy] = true;
            queue.push([dx, dy]);
          }
        });
      }
      count++;
    }
    return -1;
  };

  const leverTime = bfs(maps, start, 'L');
  const endTime = bfs(maps, lever, 'E');

  if (leverTime === -1 || endTime === -1) {
    return -1;
  }

  return leverTime + endTime;
}
