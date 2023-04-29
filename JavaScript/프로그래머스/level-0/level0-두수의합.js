function solution(a, b) {
  let carry = 0;
  let sum = '';
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;
    const digitSum = digitA + digitB + carry;
    sum = (digitSum % 10) + sum;
    carry = Math.floor(digitSum / 10);
    i--;
    j--;
  }

  return sum;
}

// function solution(a, b) {
//     const a1 = BigInt(a.slice(0, Math.floor(a.length / 2)));
//     const a2 = BigInt(a.slice(Math.floor(a.length / 2)));
//     const b1 = BigInt(b.slice(0, Math.floor(b.length / 2)));
//     const b2 = BigInt(b.slice(Math.floor(b.length / 2)));
//     return BigInt("" + a1 + a2) + BigInt("" + b1 + b2) + ""
// }
