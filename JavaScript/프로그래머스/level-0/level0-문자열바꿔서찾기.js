function solution(myString, pat) {
  return myString.includes(
    pat.replace(/A/g, 'a').replace(/B/g, 'A').replace(/a/g, 'B')
  )
    ? 1
    : 0;
}
