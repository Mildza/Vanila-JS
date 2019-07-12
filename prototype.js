// INHERITANCE
// One object gets access to the properties and methods of another object.
// All objects including functions have property prototype,it is object proto.

const person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  },
};

const john = {
  firstname: 'John',
  lastname: 'Doe',
};

john.__proto__ = person;

console.log(john.getFullName());

// REFLECTION - an object can look at itself, listing ang changing its properties and methods.

for (let prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ':' + john[prop]);
  }
}
