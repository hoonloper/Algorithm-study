function solution(myString, pat) {
  const len = pat.length;
  let lastIndex = 0;
  for (let i = 0; i < myString.length - len + 1; i++) {
    if (myString.slice(i, i + len) === pat) {
      lastIndex = i + len - 1;
    }
  }
  return myString.slice(0, lastIndex + 1);
}
