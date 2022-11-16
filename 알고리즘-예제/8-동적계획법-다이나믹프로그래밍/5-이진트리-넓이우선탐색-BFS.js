/*
넓이우선탐색
- 상태 트리로 접근
- 출발 지점에서 도착지점으로 이동시 최단 거리를 구할 때 사용
*/
const solution = () => {
  let answer = '';
  const queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + ' ';
    for (const nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
};

console.log(solution());
