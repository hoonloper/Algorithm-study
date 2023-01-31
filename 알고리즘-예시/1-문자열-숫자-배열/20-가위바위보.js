function solution(number, A, B) {
  const answer = [];

  for (let i = 0; i < number; i++) {
    if (A[i] === B[i]) answer.push('D');
    else if (A[i] === 1 && B[i] === 3) answer.push('A');
    else if (A[i] === 2 && B[i] === 1) answer.push('A');
    else if (A[i] === 3 && B[i] === 2) answer.push('A');
    else answer.push('B');

    //   if(A[i] === 1) {
    //     if(B[i] === 1) answer.push("D");
    //     else if(B[i] === 2) answer.push("B")
    //     else answer.push("A");
    //   } else if (A[i] === 2) {
    //     if(B[i] === 1)answer.push("A")
    //     else if (B[i] === 2) answer.push("D")
    //     else answer.push("B")
    //   } else {
    //     if(B[i] === 1) answer.push("B")
    //     else if (B[i] === 2) answer.push("A")
    //     else answer.push("D")
    //   }
  }

  return answer;
}

solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
