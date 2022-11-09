function solution(s, t) {
  let answer = s.split(t).length;

  return answer - 1;
  // let answer = 0;

  // for(const x of s) {
  //   if(x === t) answer += 1;
  // }

  // return answer;
}

solution('COMPUTERPROGRAMING', 'R');
