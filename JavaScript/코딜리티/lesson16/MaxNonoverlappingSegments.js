function solution(A, B) {
  // Implement your solution here
  if (A.length < 1) {
    return 0;
  }
  if (A.length < 2) {
    return 1;
  }

  let end = B[0];
  let count = 1;

  for (let i = 1; i < A.length; i++) {
    if (A[i] > end) {
      count++;
      end = B[i];
    }
  }
  return count;
}
