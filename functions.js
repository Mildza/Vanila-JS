// FIRST CLASS FUNCTIONS //
// Everything we can do with other types we can do with functions. Assign them to variables, pass them around, create on the fly.

// FUNCTION STATETMENT
// they just do the work
function greet() {
  console.log('Hello');
}
// Functions are special kind of Object
// We can attach property to a function
greet.language = 'english';
console.log(greet.language);

//FUNCTION EXPRESSION
// A unit of code that result in a value(it could be a number, string, object ...), it dosen't have to save a variable.
// Functions expressions are not hoisted.

const anonymousGreet = function() {
  console.log('Hi');
};
anonymousGreet();

// When we invoke the functions new execution context is created. Creation of variable enviroment, reference to outer (lexical) environment, creation of 'this. This refers to global object.

function reference() {
  this.newVariable = 'global';
}
reference();
console.log(newVariable);

//This keyword inside the object reference to Object, so we can accesed to property of object

const person = {
  name: 'John',
  log: function() {
    console.log(this);
  },
};
person.log();

// If we have function inside function inside function ite refer to global object

const person2 = {
  name: 'John',
  log: function() {
    //self = this
    console.log(this);
    const inside = function() {
      console.log(this);
    };
    inside();
  },
};
person2.log();
