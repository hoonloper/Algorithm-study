function solution(n, k) {
  const arr = n.toString(k).split('0');
  const isPrime = (num) => {
    if (isNaN(num) || !num || num === 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return arr.reduce((acc, cur) => acc + (isPrime(+cur) ? 1 : 0), 0);
}
