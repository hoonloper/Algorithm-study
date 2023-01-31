function solution(s) {
  let answer = '';

  for (const x of s) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }

  return answer;
}

solution('ItisTimeToStudy');
