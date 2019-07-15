const arr = [1, 2, 3, 4, 5, 6];

//Filter receives the same arguments as map, and works very similarly.
//The only difference is that the callback needs to return either true or false.
//If it returns true then the array keeps that element and if it returns false the element is filtered out.

const filter = arr.filter(num => num % 2 == 0);
console.log('Filter odd numbers: ' + filter);

//We can combine filter and incudes
const arr2 = ['bohemian song', 'bird', 'love song', 'nothing'];
const filter2 = arr2.filter(song => song.includes('song'));
console.log(filter2);

// The some() method checks if any of the elements in an array pass a test (provided as a function).
// If it finds an array element where the function returns a true value, and does not check the remaining values, otherwise it returns false.

const some = arr.some(num => num == 3);
console.log('Some is there: ' + some);

//The find() method returns the value of the first element in an array that pass a test (provided as a function) and does not check the remaining values.Otherwise it returns undefined. If we search for unique value its better to use then filter method.
const find = arr.find(num => num > 3);
console.log('find is there: ' + find);

//The indexOf() method returns the position of the first occurrence of a specified value in a string.
// Returns -1 if the value to search for never occurs. Optional is to set start index.
const index = arr.indexOf(2);
console.log('indexOF is there(position): ' + index);

// The includes() method determines whether an array contains a specified element, returns true if the array contains the element, and false if not. If dont need position of element its better to use then indxOf.
const includes = arr.includes(7);
console.log('includes is there: ' + includes);
