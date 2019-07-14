// MAP method creates a new array,provided function once for each element in an array, in order.

const arr = [1, 2, 3, 4, 5];
let thisValue;
arr.map(function(currentValue, index, array) {}, thisValue);

const multipleByTwo = arr.map(num => num * 2);
console.log(multipleByTwo);

//We can pass the function
const byFive = num => num * 5;
const multiple = arr.map(byFive);
console.log(multiple);

// In the case we wont to use reverse array multiple by 3 we must use first map because is immutable and reverse isnt.
const multipleReversed = arr.map(num => num * 3).reverse();
console.log(multipleReversed);

//If we wanted to use map to extract a single key from every item in an array of objects.
const originalArray = [{ a: 1, b: 'first' }, { a: 2, b: 'second' }, { a: 3, b: 'third' }];

const newArray = originalArray.map(object => (object = object.b));
console.log(newArray);

//If we want to iterate through all of the items in an object itself as opposed to an array of objects.
const object = {
  a: 1,
  b: 2,
  c: 3,
};
const arrFromObject = Object.entries(object);
const valueDoubled = arrFromObject.map(([keys, value]) => [keys, value * 2]);
console.log(valueDoubled);
