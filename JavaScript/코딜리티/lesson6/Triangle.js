function solution(A) {
  Arrays.sort(A);

  for (let i = 0; i < len - 2; i++) {
    const P = arr[i];
    const Q = arr[i + 1];
    const R = arr[i + 2];
    if (P + Q > R && Q + R > P && R + P > Q) {
      return 1;
    }
  }
  return 0;
}
