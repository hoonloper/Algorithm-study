const solution = (target, arr) => {
  arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = arr[arr.length - 1];
  let answer = 0;

  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);

    if (maxLocation(arr, mid) >= target) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
};

const maxLocation = (arr, mid) => {
  let cnt = 1;
  let ep = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= mid) {
      ep = arr[i];
      cnt++;
    }
  }

  return cnt;
};

const target = 3;
const arr = [1, 2, 8, 4, 9];
console.log(solution(target, arr));
