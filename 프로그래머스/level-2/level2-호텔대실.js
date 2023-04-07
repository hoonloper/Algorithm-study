function solution(book_time) {
  book_time = book_time
    .map((time) => {
      return time.map(
        (t) => t.split(':').reduce((acc, el) => +acc * 60 + +el),
        0
      );
    })
    .sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });
  const rooms = [];
  while (book_time.length) {
    let [start, end] = book_time.shift();
    let count = 1;

    book_time = book_time.reduce((acc, [s, e]) => {
      if (end + 10 <= s) {
        count++;
        end = e;
        return acc;
      }
      acc.push([s, e]);
      return acc;
    }, []);
    rooms.push(count);
  }
  return rooms.length;
}
