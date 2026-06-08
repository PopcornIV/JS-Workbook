## Week 1 – Day 3 Reflection

### What I completed

- Understood and implemented array aggregation logic
- Manually computed:
- Sum of numbers using a loop
- Average of an array
- Largest number in an array (max logic)
- Smallest number in an array (min logic)
- Practiced iteration through arrays using index-based loops
- Built understanding of running total (accumulator pattern)
- Began working with arrays of objects conceptually
- Printed and accessed values from structured data (students-style arrays)
- Reinforced manual logic over built-in methods (no Math.max/min)

### Challenges faced

- Confusing variable naming during accumulation (average used as sum initially)
- Mental confusion between:
- - sum vs average
- Forgetting that average requires a final division step
- Repeating loop patterns without fully understanding initialization logic
- Slight hesitation in choosing correct starting values:
  max = arr[0]
  min = arr[0]
- Not fully internalizing why we skip index 0 in optimized loops

### What I learned

- Average is not calculated directly—it is:
  sum of all elements ÷ number of elements
- Loop-based aggregation follows a consistent pattern:
  initialize variable
  iterate array
  update value
  finalize result
- The accumulator pattern is fundamental in programming
- Arrays require index-based traversal (for loops) for full control
- arr[0] is commonly used as a safe starting reference for comparisons
- Variable naming must reflect current state (sum ≠ average during loop)
- Arrays of objects are the foundation of real-world data systems
- Data processing always involves:
  input → transformation → output

### Key mistakes I made

- Used misleading variable names (e.g. average while storing sum)
- Initially lacked clarity on:
- when to divide for average
- Repeated loop logic without fully abstracting the pattern
- Did not always mentally simulate execution step-by-step before coding
- Slight inefficiency in loop design (starting from index 0 instead of 1 in max/min logic in some cases)
- Treated algorithm steps as code-first instead of logic-first

### Weak areas

- Strong mental simulation of loops (iteration-by-iteration reasoning)
- Clear separation between:
  sum
  count
  average
- Algorithm planning before coding
- Naming discipline (critical for readability and debugging)
- Confidence with arrays of objects (still introductory level)
- Recognizing reusable patterns in different problems

### Improvement plan

- Always write this before coding:
  Input
  Output
  Steps in English
- Strengthen loop tracing (dry running code manually)
- Practice accumulator pattern until automatic
- Improve variable naming discipline:
  match name to actual stored meaning
  Start grouping problems into patterns:
  aggregation
  search (max/min)
  filtering
- Begin thinking in reusable logic blocks, not single solutions

## Day 3 Key Insight

- Most real programming problems are not new problems.
- They are variations of the same core patterns:
  “Loop through data and update a running value.”
- Once you understand this:
  max
  min
  sum
  average
  frequency counts
- are all the same pattern with slight variation.

## End of Day 3 Status

- Looping logic: improving
- Aggregation pattern: understood
- Arrays of objects: introductory
- Algorithm thinking: developing
- Mental simulation: needs consistency
