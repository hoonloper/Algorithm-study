/*
  이진트리는 부모, 왼쪽 자식, 오른쪽 자식이 기본 구조이다.

  - 깊이 우선 탐색은 왼쪽을 먼저 파고든다.
  - 왼쪽을 파고드려다 없으면 뒤로 간다.
  - 오른쪽을 파고들고 없으면 뒤로 간다.

  전위순회 출력 순서 - 부모 -> 왼쪽 -> 오른쪽
  중위순회 출력 순서 - 왼쪽 -> 부모 -> 오른쪽
  후위순회 출력 순서 - 왼쪽 -> 오른쪽 -> 부모
*/
const n = 1;
const solution = (n) => {
  const DFS = (v) => {
    if (v > 7) return;
    else {
      console.log(v); // 전위순회
      DFS(v * 2);
      console.log(v); // 중위순회
      DFS(v * 2 + 1);
      console.log(v); // 후위순회
    }
  };

  DFS(n);
};

solution(n);
