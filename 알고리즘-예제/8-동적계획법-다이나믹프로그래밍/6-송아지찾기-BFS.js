const solution = (S, E) => {
  let answer = 0;
  const ch = Array.from({ length: 10001 }, () => 0);
  const dis = Array.from({ length: 10001 }, () => 0);
  const queue = [];
  queue.push(S);
  ch[S] = 1;
  dis[S] = 0;

  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === E) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  // answer = dis[E];
  // return answer;
};

console.log(solution(8, 3));
