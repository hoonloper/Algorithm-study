/*
  DFS가 처음 호출되면 Stack에 함수가 쌓이게 된다.
  스택 내부에는 매개변수 정보, 지역변수, 복귀주소를 가지고 있음.
  스택 프레임 공부!
*/

const solution = (n) => {
  const DFS = (L) => {
    if (L === 0) return;
    else {
      console.log(L); // 3 2 1
      DFS(L - 1);
      console.log(L); // 1 2 3
    }
  };

  DFS(n);
};

const n = 3;

console.log(solution(n));
