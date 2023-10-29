function solution(A) {
  // Implement your solution here
  const pSum = [0, 0];
  let sum = 0;
  for (const num of A) {
    if (num === 0) {
      pSum[0] += 1;
      pSum[1] = 0;
    } else {
      pSum[1] = 1;
      sum += pSum[0] * pSum[1];
    }
  }
  return sum > 1_000_000_000 ? -1 : sum;
}
