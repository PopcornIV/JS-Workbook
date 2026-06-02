### What I completed

- Understood and explained core concepts:
- Functions
- Methods (object-bound functions)
- Objects
- Arrays
- Practiced object creation with properties and methods
- Used this inside object methods to access dynamic values
- Performed object property mutation (name, course, etc.)
- Iterated through object properties using for...in
- Filtered object values to exclude functions during iteration
- Built and executed a student object with a study() method
- Verified dynamic updates reflect in method execution

### Challenges faced

- Confusion between:
- this vs object variable name
- Initially weak mental model of:
- runtime binding of this
- Understanding that:
- objects are referenced in memory, not copied
- Deciding how to properly filter object properties during iteration
- Recognizing that methods are also properties of objects
- Maintaining clean structure in loop blocks (braces discipline)

### What I learned

- A function is a reusable block of logic that may or may not return a value
- A method is a function that belongs to an object and uses this
- Objects represent real-world entities using key-value pairs
- Arrays are ordered collections accessed by index
- this refers to the object that invokes a method at runtime, not where it is defined
- Object properties can be updated dynamically after creation
- Methods inside objects automatically reflect updated property values due to reference behavior
- for...in loops iterate over both data properties and methods
- typeof value === "function" can be used to separate methods from data

### Key mistakes I made

- Initially assumed this refers to the variable name (student) instead of call-time context
- Weak clarity on runtime binding of this
- Almost treated object properties as static instead of dynamic references
- Risk of writing single-line loops without braces (readability issue)
- Limited awareness that methods are also enumerable properties in for...in

### Weak areas

- Deep understanding of this binding (still developing mental model)
- Distinguishing between:
- data properties vs behavior (methods)
- Loop structure discipline (braces + readability habits)
- Translating abstract runtime behavior into mental simulation
- Confidence in explaining execution flow without code reference

### Improvement plan

- Strengthen mental model of this through:
- manual tracing of execution (“who is calling this function?”)
- Continue practicing object manipulation until it becomes automatic
- Always use braces in loops and conditionals for clarity
- Practice separating:
- state (data)
- behavior (methods)
- Reinforce understanding that objects are reference-based structures
- Begin shifting from “writing code” → “predicting execution behavior”

## Day 2 Key Insight (Critical Learning)

- Objects are not just data containers.
- They are:
- runtime-bound entities where behavior (methods) dynamically interacts with state (properties) through this.
- This is the foundation of:
- OOP (Object-Oriented Programming)
- backend models
- frontend state systems (React, etc.)

## End of Day 2 Status

- Conceptual understanding: improving
- Object manipulation: solid
- this binding: developing
- Iteration logic: basic but correct
- Readability discipline: needs strengthening
