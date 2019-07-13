// LET - block scopes variable, we must declare before using it
if (true) {
  let a = 'John';
  console.log(a);
}
// console.log(a) - log: a is not defined

// CONST - its constant variable it couldnt be changed, it cant be declared without value
// Arrays are reference types, we declare POINTER  to this array of values so we can add value
const word = ['a', 'b', 'c'];
word.push('d');
console.log(word);

// FAT ARROW - we cn use it on all place we used normal functions
// if we have no arguments we must provide parentisis
const fn = () => console.log('Hello say fat');
fn();
// if we only one argument we can omit parentisis
const fun = a => a + 3;
console.log(fun(4));

// Keyword this keep the the context in which function is defined.
// We dont need call, apply, bind.
const func = () => console.log(this);
func2 = function() {
  console.log(this);
};

// Default parameters
// Old way
function isEqual(number, compare) {
  compare = compare || 10;
  return number == compare;
}
console.log(isEqual(10, 9));

// New way
function isEqualTo(number, compare = 10) {
  return number == compare;
}
console.log(isEqualTo(10));

// Object literals
// We can use bracket notatio
let name = 'Jane';
let genreField = 'genre';
obj = {
  name,
  age: 18,
  [genreField]: 'female',
  'greet me'() {
    return this.name + ' ' + this.age;
  },
};

console.log(obj['greet me']());
console.log(obj[genreField]);
console.log(obj.genre);

// REST operator converts list of values into array of values, as arguments
//Old way
const num = [1, 2, 3, 4, 5];
function sum(arr) {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log(sum(num));

// New way
function sum2(...arr) {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log(sum2(1, 2, 3, 4));

// SPREAD operator converts array of values to the list of values
let numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers));

// For of loop
const items = [10, 20, 30, 40, 50];
for (item of items) {
  console.log(item);
}

// Template literal
let literal = 'works';
let message = `It's ${literal}`;
console.log(message);

// Destructuring - complex object in simplier
// Array are pulling by position
let desArray = [1, 2, 3, 4];
let [a, b = 5, ...c] = desArray;

console.log(a, b, c);
// log 1 2 [3 4]

//Swap values
let value1 = 1;
let value2 = 2;
[value2, value1] = [value1, value2];
console.log('Value1: ' + value1);
console.log('Value2: ' + value2);

// Fast initialization
let [x, y] = [5, 6];
console.log(x, y);

// Copying array
let original = [2, 4, 6, 8];
let copied = [...original];
console.log(copied);

// Object are pulling by name

let simple = {
  jane: 'Jane',
  hi: function() {
    return 'Hi';
  },
};

let { jane, hi } = simple;
console.log(jane);
console.log(hi());
