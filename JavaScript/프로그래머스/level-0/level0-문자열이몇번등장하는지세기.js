function solution(myString, pat) {
  const sLen = myString.length;
  const pLen = pat.length;
  let count = 0;
  for (let i = pLen; i <= sLen; i++) {
    if (myString.slice(i - pLen, i) === pat) {
      count++;
    }
  }
  return count;
}
