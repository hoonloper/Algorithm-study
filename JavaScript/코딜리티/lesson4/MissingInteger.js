function solution(A) {
  // Implement your solution here
  A = A.sort((a, b) => a - b).filter((e) => e > 0);

  let max = 1;
  const len = A.length;
  if (len < 1 || A[0] !== 1) {
    return max;
  }

  for (let i = 0; i < len; i++) {
    if (A[i] > max + 1) {
      return max + 1;
    } else {
      max = Math.max(max, A[i]);
    }
  }
  return max + 1;
}
