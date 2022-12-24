function solution(numbers, target) {
  const DFS = (cur, x) => {
    if (x === numbers.length) {
      if (cur === target) {
        return 1;
      }
      return 0;
    } else {
      let cur1 = cur + numbers[x];
      let cur2 = cur - numbers[x];
      let answer = 0;
      answer += DFS(cur1, x + 1);
      answer += DFS(cur2, x + 1);
      return answer;
    }
  };

  let answer = 0;
  answer += DFS(numbers[0], 1);
  answer += DFS(-numbers[0], 1);

  return answer;
}
