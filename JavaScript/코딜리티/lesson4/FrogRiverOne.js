function solution(X, A) {
  // Implement your solution here
  const arr = Array.from({ length: X + 1 }, () => false);
  arr[0] = true;

  let num = X;
  const len = A.length;
  for (let i = 0; i < len; i++) {
    if (A[i] <= X) {
      if (!arr[A[i]]) {
        num -= 1;
        arr[A[i]] = true;
      }

      if (num === 0) {
        return i;
      }
    }
  }
  return -1;
}
