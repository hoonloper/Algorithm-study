function solution(sequence, k) {
  // const prefix = [0];
  // for (let i = 1; i <= sequence.length; i++) {
  //   prefix[i] = sequence[i - 1] + prefix[i - 1];
  // }
  const prefix = sequence.reduce(
    (acc, cur, i) => {
      acc.push(acc[i] + cur);
      return acc;
    },
    [0]
  );

  let answer = [];
  let max = Number.MAX_SAFE_INTEGER;
  let lt = 0;
  let rt = 0;

  while (lt <= rt) {
    const sum = prefix[rt] - prefix[lt];

    if (sum === k) {
      let curLt = rt - 1 - lt;
      if (max > curLt) {
        answer = [lt, rt - 1];
        max = curLt;
      }
    }
    if (sum < k) {
      rt++;
    } else {
      lt++;
    }
  }

  return answer;
}
