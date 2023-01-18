function solution(n, words) {
  const stack = [];
  const answer = [];
  let count = 0;
  let flag = true;
  while (flag) {
    if (!words.length) break;
    count++;
    for (let i = 0; i < n; i++) {
      const word = words.shift();
      const stackWord = stack[stack.length - 1];
      if (
        stack.includes(word) ||
        (stackWord && word[0] !== stackWord[stackWord.length - 1])
      ) {
        flag = false;
        answer.push(i + 1, count);
        break;
      }
      stack.push(word);
    }
  }

  return !answer.length ? [0, 0] : answer;
}
