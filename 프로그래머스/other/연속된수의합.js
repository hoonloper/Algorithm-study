function solution(num, total) {
  let startNum = 0;
  // 초반 [0~num]의 배열을 생ㅅ어
  let twoPointer = new Array(num)
    .fill(0)
    .map((a, i) => i)
    .reduce((a, b) => a + b, 0);
  while (twoPointer !== total) {
    if (twoPointer < total) {
      startNum++;
    } else {
      startNum--;
    }
    twoPointer = new Array(num)
      .fill(0)
      .map((a, i) => i + startNum)
      .reduce((a, b) => a + b, 0);
  }
  return new Array(num).fill(0).map((a, i) => i + startNum);
}

solution(4, 14);
