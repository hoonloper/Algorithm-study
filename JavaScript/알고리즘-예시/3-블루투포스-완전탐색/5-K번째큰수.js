const solution = (n, card) => {
  let answer;
  const k = n[1];
  let tmp = new Set();

  for (let i = 0; i < n[0]; i++) {
    for (let j = i + 1; j < n[0]; j++) {
      for (let k = j + 1; k < n[0]; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];

  console.log(answer);
  //   const len = n[0];
  //   const k = n[1];
  //   const answer = [];

  //   // 큰 숫자 순서로 정렬한다.
  // 	arr.sort((a, b) => b - a);

  //   // 가장 큰 수와 다음으로 큰 수를 배열에서 뽑아낸다.
  // 	const first = arr.shift();
  //   const second = arr.shift();

  //   // 3번째부터 큰수부터 k번 반복하며 더한 값을 배열에 푸시한다.
  //   for(let i = 0; i < k; i++) {
  //     answer.push(first + second + arr[i]);
  //   }

  //   // k번째 수를 출력한다.
  // 	console.log(answer[k - 1]);
};

solution([10, 3], [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
