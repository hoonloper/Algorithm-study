function solution(A, B, K) {
  // Implement your solution here
  if (K === 1) {
    return B - A + 1;
  }

  let start = 0;
  if (A < K) {
    start = K;
  } else {
    start = Math.ceil(A / K) * K;
  }

  let count = A === 0 ? 1 : 0;
  for (let i = start; i <= B; i += K) {
    count++;
  }
  return count;
}
