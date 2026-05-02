
let duplicates = (arr) => {
  const seen = new Set();
  const dups = new Set();
  arr.forEach((x) => {
    if (seen.has(x)) {
      dups.add(x);
    } else {
      seen.add(x);
    }
  });
  return Array.from(dups);
};

console.log(duplicates(['a', 'b', 'c', 'a', 'b', 'a']));    