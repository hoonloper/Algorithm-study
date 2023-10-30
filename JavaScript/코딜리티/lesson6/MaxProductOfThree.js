function solution(A) {
  A.sort();
  return Math.max(A[0] * A[1] * A.at(-1), A.at(-3) * A.at(-2) * A.at(-1));
}
