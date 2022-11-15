// DFS - 인접리스트, 노드 개수가 많을 때
const solution = (n, arr) => {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => Array().fill());
  const ch = Array.from({ length: n + 1 }, () => 0);
  for (const [a, b] of arr) {
    // 인접 리스트를 지정
    graph[a].push(b);
  }
  const DFS = (v) => {
    if (v === n) {
      answer++;
    } else {
      for (let i = 0; i <= graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
        }
      }
    }
  };
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
