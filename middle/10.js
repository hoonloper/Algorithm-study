const num = "1532 5342 8329 2632 5849 3213 1002";
const num2 = "1000";
const num3 =
  "10000 1000 9898 3098 4532 6879 7444 6392 8163 9999 3002 1351 1003 1002 2000";
function solution(num) {
  const brand = {
    삼성: [],
    애플: [],
    한성: [],
    레노버: [],
    엘지: [],
    아수스: [],
    기타: [],
  };
  const number = num.split(" ");

  for (let i in number) {
    if (1000 <= number[i] && number[i] < 2000) {
      brand["삼성"].push(number[i]);
      brand["삼성"].sort((a, b) => a - b);
    } else if (2000 <= number[i] && number[i] < 3000) {
      brand["애플"].push(number[i]);
      brand["애플"].sort((a, b) => a - b);
    } else if (3000 <= number[i] && number[i] < 4000) {
      brand["한성"].push(number[i]);
      brand["한성"].sort((a, b) => a - b);
    } else if (4000 <= number[i] && number[i] < 5000) {
      brand["레노버"].push(number[i]);
      brand["레노버"].sort((a, b) => a - b);
    } else if (5000 <= number[i] && number[i] < 6000) {
      brand["엘지"].push(number[i]);
      brand["엘지"].sort((a, b) => a - b);
    } else if (6000 <= number[i] && number[i] < 7000) {
      brand["아수스"].push(number[i]);
      brand["아수스"].sort((a, b) => a - b);
    } else {
      brand["기타"].push(number[i]);
      brand["기타"].sort((a, b) => a - b);
    }
  }

  return brand;
}

console.log(solution(num));
console.log(solution(num2));
console.log(solution(num3));
