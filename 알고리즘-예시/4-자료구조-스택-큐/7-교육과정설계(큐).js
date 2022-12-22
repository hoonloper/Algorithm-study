const solution = (need, plan) => {
  const queue = need.split('');

  for (const s of plan) {
    if (queue.includes(s)) {
      if (queue.shift() !== s) return 'NO';
    }
  }

  if (queue.length > 0) return 'NO';

  return 'YES';
};

console.log(solution('CBA', 'CBDAGE'));
