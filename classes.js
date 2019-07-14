// CLASSES
class Male {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}
// Inheritance
class Female extends Male {
  constructor() {
    super('Jane');
    this.email = 'masdasd';
  }
}

const male = new Male('John');
const female = new Female();

male.greet();
female.greet();

// Static class - doesnt need to make instance of class

class Help {
  static need() {
    console.log('Need help!');
  }
}
Help.need();

// Getter - Setter
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    return (this._name = value);
  }
}

const person = new Person('Jane');
console.log(person.name);
person.name = 'Fonda';
console.log(person.name);
