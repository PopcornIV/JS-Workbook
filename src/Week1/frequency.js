const frequency = (arr) => {
  const freq = {};
  arr.forEach((x) => {
    freq[x] = (freq[x] || 0) + 1;
  });
  return freq;
};

console.log(frequency(['a', 'b', 'c', 'a', 'b', 'a']));