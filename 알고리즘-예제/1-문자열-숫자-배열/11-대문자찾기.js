function solution(s) {
  let answer = 0;

  for (let x of s) {
    let num = x.charCodeAt();

    if (num >= 65 && num <= 90) answer += 1;
    // if(x === x.toUpperCase()) answer += 1;
  }
  return answer;
}

solution('KoreaTimeGood');
