function solution(s) {
  const answer = [];
  let x = s[0];
  let sCount = 0;
  let dCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === x) {
      sCount++;
    } else {
      dCount++;
    }
    if (sCount === dCount) {
      const sum = sCount + dCount;
      const targetIndex = i - sum + 1;
      answer.push(s.slice(targetIndex, targetIndex + sum));
      sCount = 0;
      dCount = 0;
      x = s[i + 1];
    }
  }
  answer.push(s.slice(s.length - sCount + dCount, s.length));

  return answer.filter((el) => el).length;
}
