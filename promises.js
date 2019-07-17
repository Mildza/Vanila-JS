// Promises are objects who gives a promise that they will give us back some data in the future so we can continue with our work.
// Promise excpect function as input and this function excpect 2 parameters - resolve and reject
//Resolve is a function in which we pass a argument
//We use promise with 'then' function - when the promise is resolve do whatever
let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Its done');
    reject('Its failed');
  }, 2000);
});

promise
  .then(function(value) {
    console.log(value);
  })
  .catch(function(error) {
    console.log(error);
  });

// Promise.all([promise1, promise2])
// We can combine promises in one single promise.
// It will resolve only if all promises are resolved as array, if any reject it will catch error.

// Promise.race([promise1, promise2])
// What first promise resolve or reject it will return.

// Object.assign use to merge objects
// First object we pass is base object
let obj1 = {
  a: 1,
};

let obj2 = {
  a: 2,
  b: 2,
};

let obj = Object.assign(obj1, obj2);
console.log(obj);


