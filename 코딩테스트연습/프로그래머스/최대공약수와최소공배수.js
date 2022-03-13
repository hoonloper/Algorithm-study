function solution(n, m) {
  // 최대공약수, 유클리드 호제법... 어렵다..
  const gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m));

  // 최소공배수, n과 m 곱한값에 최대공약수로 나누어줌
  const lcm = (n, m) => (n * m) / gcd(n, m);

  return [gcd(n, m), lcm(n, m)];
}

console.log(solution(3, 12));
