function solution(bridge_length, weight, truck_weights) {
  const ing = [];
  let count = 1;
  let sum = 0;

  while (ing.length || truck_weights.length) {
    if (ing.length <= bridge_length && sum + truck_weights[0] <= weight) {
      const tWeight = truck_weights.shift();
      ing.push([tWeight, count + bridge_length]);
      sum += tWeight;
      count++;
    } else {
      const [tWeight, c] = ing.shift();
      if (count < c) {
        count = c;
      }
      sum -= tWeight;
    }
  }

  return count;
}
