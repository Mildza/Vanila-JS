// Bind method returns a new function and reference the this variable to the object we pass.

const person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  },
};

const log = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log(lang1 + ' ' + lang2);
}; //.bind(person);

const logPerson = log.bind(person);

logPerson();

// Call executes functions and we pass what will be variable this and paratmeters.

log.call(person, 'en', 'es');

// Apply executes functions and we pass what will be variable this and paratmeters like array.

log.apply(person, ['sr', 'sl']);

// Function borrowing

person2 = {
  firstname: 'Jane',
  lastname: 'Doe',
};

console.log(person.getFullName.apply(person2));

// Function currying creating a copy of function but with some preset parameters.

function multiply(a, b) {
  return a * b;
}

const multiplyBytwo = multiply.bind(this, 2);
console.log(multiplyBytwo(5));
