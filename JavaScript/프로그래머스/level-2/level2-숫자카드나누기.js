function solution(arrayA, arrayB) {
  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }

  let answer = 0;
  if (arrayA.length === 1) {
    if (arrayA[0] !== arrayB[0]) answer = Math.max(arrayA[0], arrayB[0]);
  } else {
    let a = gcd(arrayA[0], arrayA[1]);
    let b = gcd(arrayB[0], arrayB[1]);

    for (let i = 1; i < arrayA.length; i++) {
      a = gcd(a, arrayA[i]);
      b = gcd(b, arrayB[i]);
    }
    if (a > 1 && arrayB.every((el) => el % a !== 0)) {
      answer = Math.max(answer, a);
    }
    if (b > 1 && arrayA.every((el) => el % b !== 0)) {
      answer = Math.max(answer, b);
    }
  }

  return answer;
}
