if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
//Will not throw error which might be confusing for us because in JAVA or C blocks create scope because of which the variable X should not be
//accessible outside it.
//However, because blocks don't create scopes for var, the var statements here actually create a global variable.
//In ES6, JavaScript introduced the let and const declarations, which allow you to create block-scoped variables.
//In essence, blocks are finally treated as scopes in ES6, but only if you declare variables with let or const.

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);
//Now because makeAdder() returns a function, add5 and add10 are both function which take an argument
console.log(add5(2)); // 7
console.log(add10(2)); // 12
