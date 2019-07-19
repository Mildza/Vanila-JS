//Proxy simulate wrapper around the object
// Proxy object expect two arguments,first is a target and a second one is handler which contains logic
let person = {
  name: 'John',
};
// Check if some property exist in object
let handler = {
  get: function(target, name) {
    return name in target ? target[name] : 'It doesnt exist';
  },
  set: function(target, property, value) {
    if (value.length >= 2) {
      Reflect.set(target, property, value);
    }
  },
};
let proxy = new Proxy(person, handler);
console.log('-------Check property of objects-------');
console.log(proxy.age);

console.log('-------Set value less then 2-------');
proxy.name = 'J';
console.log(proxy.name);
proxy.name = 'Jonias';
console.log(proxy.name);

//We can set proxy to empty object and then set prototype to access directly throw the person object
let proxyProto = new Proxy({}, handler);
Reflect.setPrototypeOf(person, proxyProto);
console.log('-------Accessing non declared variable-------');
console.log(person.names);

//We can wrap a functions
function log(message) {
  console.log('Log created by :' + message);
}
let fhandler = {
  apply: function(target, thisArg, argumentList) {
    if (argumentList.length == 1) {
      return Reflect.apply(target, thisArg, argumentList);
    }
  },
};
let fproxy = new Proxy(log, fhandler);
console.log('---Calling function with one argument---');
fproxy('John');
console.log('---Calling function with two argument---');
fproxy('John', 3);
