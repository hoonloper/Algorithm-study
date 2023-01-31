const solution = (m, arr) => {
  let answer = 0;
  let n = arr.length;
  // 낮은 금액 순서대로 정렬한다.
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (const i in arr) {
    // 50% 할인된 상품 가격과 배송비를 더한 후 총 금액에서 뺀 후 변수에 저장한다.
    let money = m - (arr[i][0] / 2 + arr[i][1]);
    let cnt = 1;

    for (let j = 0; j < n; j++) {
      // 할인된 금액의 케이스를 제외하고 상품 가격 + 배송비가 할인된 금액보다 크면 반복을 벗어난다.
      if (j !== i && arr[j][0] + arr[j][1] > money) break;
      // 할인된 금액의 케이스를 제외하고 상품 각격 + 배송비가 할인된 금액과 같거나 작으면 총 금액에서 상품 가격 + 배송비를 빼고 카운트를 증가한다.
      if (j !== i && arr[j][0] + arr[j][1] <= money) {
        money -= arr[j][0] + arr[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  console.log(answer);
};

solution(28, [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
]);
