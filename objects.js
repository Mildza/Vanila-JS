// FUNCTION CONSTRUCTOR
// A normal function that is used to construct objects. The 'this' variable points to new empty object, and that object is returned from the function automaticaly.

// new is operator, its create empty object and then invoke the function, variable this is pointed to this new empty object. If we dont return anything from the function, it will return empty object.

function Person(firstname, lastname) {
  (this.firstname = firstname), (this.lastname = lastname);
}

const john = new Person('John', 'Doe');

console.log(john);
