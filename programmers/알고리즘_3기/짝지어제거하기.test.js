// 시간 복잡도 문제로 해결하지 못한 첫번째 해답
function solution(s) {
  const str = s.split("").filter((e) => e !== " ");

  let count = 1000000;

  while (count) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        str.splice(i, 2);
      }
    }

    if (!str.length) return 1;

    count--;
    console.log(str);
  }
}

// 스택 구조를 활용해 해결한 두번째 해답
function solution(s) {
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);

    if (arr[arr.length - 1] === arr[arr.length - 2]) {
      arr.pop();
      arr.pop();
    }
  }

  return arr.join("") === "" ? 1 : 0;
}

const a = "b a ba";
console.log(solution(a));

// test("2 * 2 to be 4", () => {
//   expect(solution("bbcc")).toMatch("bbcc");
// });
