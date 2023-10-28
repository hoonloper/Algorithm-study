function solution(A) {
  // Implement your solution here
  A.sort((a, b) => a - b);

  const len = A.length;
  for (let i = 0; i < len; i++) {
    if (A[i] !== i + 1) {
      return 0;
    }
  }
  return 1;
}
