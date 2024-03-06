// Updated dependencies
const dependencies = {
  minti_fulkerson: '0.1.4',
  new_dependency: '1.0.0',
};

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero!');

const isPositive = (num) => num > 0;

const isNegative = (num) => num < 0;

const addWord = (str, word) => `${str} ${word}`;

console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(3, 7)); // 21
console.log(divide(20, 5)); // 4
console.log(isPositive(10)); // true
console.log(isNegative(-7)); // true
console.log(addWord('Welcome', 'to errr!')); // Output: Welcome to errr!

// Adding the 'kilaa' variable
const errr = 'errr';
console.log(errr);
