function solution(K, A) {
  // Implement your solution here
  const len = A.length;

  const pSum = Array.from({ length: len }, () => 0);
  pSum[0] = A[0];
  let count = pSum[0] >= K ? 1 : 0;
  if (count === 1) {
    pSum[0] = 0;
  }
  for (let i = 1; i < len; i++) {
    if (pSum[i - 1] + A[i] >= K) {
      pSum[i] = 0;
      count++;
    } else {
      pSum[i] += pSum[i - 1] + A[i];
    }
  }

  return count;
}
