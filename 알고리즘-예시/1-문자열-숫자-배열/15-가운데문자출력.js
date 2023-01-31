function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);

  if (s.length % 2 === 1) answer = s.substr(mid, 1);
  // if(mid % 2 === 0) answer = s[mid];
  else answer = s.substr(mid - 1, 2);

  return answer;
}

solution('study');
solution('good');
