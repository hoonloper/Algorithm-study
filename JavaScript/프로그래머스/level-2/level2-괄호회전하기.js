function solution(s) {
  const queue = s.split('');
  const obj = {
    ']': '[',
    '}': '{',
    ')': '(',
  };
  let count = 0;

  for (const x of s) {
    const stack = [];
    if ([']', '}', ')'].includes(queue[0])) {
      queue.push(queue.shift());
      continue;
    }
    for (let i = 0; i < queue.length; i++) {
      if (stack.length && stack[stack.length - 1] === obj[queue[i]]) {
        stack.pop();
      } else {
        stack.push(queue[i]);
      }
    }
    if (!stack.length) count++;
    queue.push(queue.shift());
  }

  return count;
}
