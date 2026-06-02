const person1 = {
  name: "Robert",
  age: 30,
  occupation: "developer",
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am a ${this.occupation}.`,
    );
  },
};

console.log(person1.name); // Output: Robert
console.log(person1.age); // Output: 30
console.log(person1.occupation); // Output: developer

person1.name = "Alice";
person1.occupation = "designer";

console.log(person1.name); // Output: Alice
console.log(person1.occupation); // Output: designer

person1.greet(); // Output: Hello, my name is Alice and I am a designer.
