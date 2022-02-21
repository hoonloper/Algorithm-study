const pat = "abba";
const str = "foo bar bar foo";

const pat2 = "abba";
const str2 = "foo bar bar baz";

const pat3 = "aaaa";
const str3 = "foo bar bar foo";

const pat4 = "abba";
const str4 = "foo foo foo foo";

function solution(pat, str) {
  const pattern = pat.split("");
  const s = str.split(" ");
  const result = [];
  let count = 0;

  for (let i = 0; i < pat.length; i++) {
    result[i] = pattern[i] + s[i];
  }

  for (let i = 0; i < result.length / 2; i++) {
    if (result[i] === result[result.length - 1 - i]) count += 1;
  }
  return count >= 2 ? true : false;
}

console.log(solution(pat, str));
console.log(solution(pat2, str2));
console.log(solution(pat3, str3));
console.log(solution(pat4, str4));
