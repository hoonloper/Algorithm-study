/* 
큰 문제를 직관적으로 알 수 있는 가장 작은 단위의 문제로 쪼갠다.
작은 단위의 문제를 해결하면 그 답을 저장해놓는다.
그 이후 문제 범위를 조금 넓힌다.
이전 답을 통해 넓힌 답을 구하는데 이걸 점화식이라고 한다.
dy[n] = dy[n-1] + 3 이런식으로 된다.
*/

const solution = (n) => {
  let answer = 0;
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
};

console.log(solution(7));
