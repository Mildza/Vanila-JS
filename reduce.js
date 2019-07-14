// REDUCE
// The reduce method cycles through each value in the array much like it would in a for-loop.
// The reduce method executes a provided function for each value of the array (from left-to-right).
// When there are no more values left in the array the method returns the some value.
// If we don’t pass in an initial value, reduce will assume the first item in your array is our initial value.
const array = [];
let initialValue = 0;
array.reduce(function(total, currentValue, currentIndex, arr) {}, initialValue);

// To get sum of all numbers
const euros = [1, 2, 5, 10, 20, 50, 100];
const sum = euros.reduce((total, amount) => total + amount);
console.log(sum);

//We don’t always have to return a single value. We can reduce an array into a new array.
//By setting the initial value to an empty array we can then push each amount into the total.

const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);
console.log(doubled);

//We could also filter out numbers we don’t want to double by adding an if statement inside our reducer.
//These operations are the map and filter methods rewritten as a reduce method.
//With reduce we can filter and then map in a single pass.

const above10 = euros.reduce((total, amount) => {
  if (amount > 10) {
    total.push(amount);
  }
  return total;
}, []);
console.log(above10);

//We have a collection of items and we want to know how many of each item are in the collection.
//To tally items in an array our initial value must be an empty object, since we are going to be returning an object we can now store key-value pairs in the total.

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];
const count = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});
console.log(count);

//We can use reduce to flatten nested amounts into a single array.
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);
console.log(flat);
