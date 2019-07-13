// FUNCTION CONSTRUCTOR
// A normal function that is used to construct objects. The 'this' variable points to new empty object, and that object is returned from the function automaticaly.
// new is operator, its create empty object and then invoke the function, variable this is pointed to this new empty object. If we dont return anything from the function, it will return empty object.

function Person(firstname, lastname) {
  (this.firstname = firstname), (this.lastname = lastname);
}

const john = new Person('John', 'Doe');
const jane = new Person('Jane', 'Doe');

console.log(john);

// Every functions has prototype property and its empty object.
// We can add later some features to this object and all objects will have access to this feature.
// Good practice is to set all properties in object but method declare in prototype.
// We have only one declarations of method for all objects.

Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
};

console.log(jane.getFullName());

// When we create primitive with new keyword, we create a object that contains primitive and give them extra abilities.
const a = new String('John');
console.log(a.indexOf('0'));

// Javascript automaticly boxes primitives in a object. Its works with strings but not numbers.
console.log('Jane'.length);

//We can add some of features to the JavaScript

Number.prototype.isPositive = function() {
  return this > 0;
};
let num = 7;
console.log(num.isPositive());
let num2 = -7;
console.log(num2.isPositive());

// Objects doesnt create new execution context.

//Pure prototype inheritance

const human = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return 'Hi' + ' ' + this.firstname;
  },
};

const smith = new Object(human);
smith.firstname = 'Smith';
console.log(smith.greet());
