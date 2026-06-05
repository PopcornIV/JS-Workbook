const num = [10, 100, 4, 101, 9];

let largest = num[0];

for (let i = 0; i < num.length; i++) {
  if (num[i] > largest) {
    largest = num[i];
  }
}
console.log("Largest number is: " + largest);

// Calculate the average of the numbers in the array
let sum = 0;

for (let j = 0; j < num.length; j++) {
  sum += num[j];
}
let average = sum / num.length;

console.log("Average is: " + average);
