
const duplicates = (arr) => {
  const seen = new Set();
  const duplicates = new Set();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  return Array.from(duplicates);
} ;

const arr = [1, 2, 3, 4, 5, 2, 3, 6];
console.log(duplicates(arr)); 