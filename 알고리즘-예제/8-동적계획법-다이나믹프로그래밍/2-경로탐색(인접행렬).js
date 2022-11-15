// DFS - 인접행렬, 노드 개수가 적을 때
// 출발시 체크를 걸어서 다시 못돌아오게 해야 함.
const solution = (n, arr) => {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const ch = Array.from({ length: n + 1 }, () => 0);
  for (const [a, b] of arr) {
    graph[a][b] = 1;
  }
  const DFS = (v) => {
    if (v === n) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        // 간선이 있는지와 체크가 안되어 있어야 함
        if (graph[v][i] === 1 && ch[i] === 0) {
          // 체크를 걸어줌
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  };
  // 체크 1은 무조건 중요. 첫번째 노드는 무조건 방문했다고 해줘야 함
  ch[1] = 1;
  DFS(1);
  return answer;
};

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
