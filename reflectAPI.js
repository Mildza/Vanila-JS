//Reflect is a built-in object that provides methods for interceptable JavaScript operations.
//Unlike most global objects, Reflect is not a constructor.
// You cannot use it with a new operator or invoke the Reflect object as a function. All properties and methods of Reflect are static.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet(prefix) {
    console.log(prefix + ' Hello I am ' + this.name);
  }
}

function TopObj() {
  this.age = 44;
}

// construct take 3 parameters, object(class), parameters, another object which will overwrite prototype
let person = Reflect.construct(Person, ['John'], TopObj);
console.log(person instanceof TopObj); // true
console.log(person.__proto__ == TopObj.prototype);

//We can call function, first argument is function we call, second refers to this, third specifies arguments to function
let person2 = Reflect.construct(Person, ['John', 44]);
Reflect.apply(person2.greet, person2, []);
Reflect.apply(person2.greet, { name: 'Jane' }, ['...']);

//We can check the prototype of object insted of using __proto__
console.log(Reflect.getPrototypeOf(person2));

// We can change prototype
let person3 = {
  genre: 'male',
};
Person.prototype.genre = 'female';
Reflect.setPrototypeOf(Person, person3);
console.log(Reflect.getPrototypeOf(person3));

//We can check if some property exists
console.log(Reflect.get(person2, 'name'));

//We can set a value to the property
Reflect.set(person2, 'name', 'New name');
console.log(Reflect.get(person2, 'name'));

//We can check if some propertie exist
console.log('------if exist property name---------');
console.log(Reflect.has(person, 'name'));

//We can get all properties of object
console.log('------get properties---------');
console.log(Reflect.ownKeys(person));

//We can create new propertis throw define method
Reflect.defineProperty(person2, 'hobbies', {
  writable: true,
  value: ['swimming', 'fishing'],
});
console.log('------set new properties--------');
console.log(person2.hobbies);

//We can delete property
Reflect.deleteProperty(person2, 'name');
console.log('------deleting properties--------');
console.log(person2.name);

//We can lock the object, to prevent adding properties
Reflect.preventExtensions(person2);

//To check if object is extension
console.log('-------- chceck if extension');
console.log(Reflect.isExtensible(person2));
