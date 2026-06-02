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

person1.name = "Alice";
person1.occupation = "designer";

person1.greet(); // Output: Hello, my name is Alice and I am a designer.

// Object declaration
const student = {
  name: "John",
  age: 22,
  course: "Computer Science",
  study() {
    console.log(`I am studying ${this.course}`);
  },
};

student.name = "Emily";
student.course = "Mathematics";

// Object iteration
for (let key in student)
  if (typeof student[key] !== "function") {
    console.log(`${key}: ${student[key]}`);
  }

student.study(); // Output: I am studying Mathematics
