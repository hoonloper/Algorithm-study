function solution(s) {
  const words = s.split(" ");
  const results = [];

  for (let word of words) {
    let s = "";

    for (let i in word) {
      if (i % 2 === 0) s += word[i].toUpperCase();
      else s += word[i].toLowerCase();
    }

    results.push(s);
  }

  return results.join(" ");
}
