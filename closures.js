// Closure - feature of JS
// We have two functions, one inside other.
// We invoke the outer function, execution context is gone but thanks to the closure name and value of variable is still present.
// Inner function have access (references) to variables in outer function. Execution context is close in outer variables.
function greet(whattosay) {
  return function(name) {
    console.log(whattosay + ' ' + name);
  };
}
greet('Hello')('Jane');
const sayHi = greet('Hello');
sayHi('John');

function closure() {
  const arr = [];
  for (var i = 0; i < 3; i++) {
    // in ES6 we can fix it with let i
    arr.push(function() {
      console.log(i);
    });
  }
  return arr;
}
var builder = closure();
builder[0]();
builder[1]();
builder[2]();

// log 3 3 3

function closure2() {
  const arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var builder2 = closure2();
builder2[0]();
builder2[1]();
builder2[2]();

// log 0 1 2

// SetTimeout uses closure

function sayHiLater() {
  const greeting = 'Hello after 2 sec';
  setTimeout(function() {
    console.log(greeting);
  }, 2000);
}
sayHiLater();

// FUNCTION FACTORIES take advantage of closures. Every time we invoke the functions its create new execution context.

function makeGreetings(language) {
  return function(firstname, lastname) {
    if (language == 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }
    if (language == 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  };
}

greetEnglish = makeGreetings('en');
greetSpanish = makeGreetings('es');

greetEnglish('Jane', 'Doe');
greetSpanish('Hombre', 'Doe');
