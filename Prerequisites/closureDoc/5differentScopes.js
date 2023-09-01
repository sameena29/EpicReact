// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
//Same thing can be written like this:
// global scope
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20

//In the example above, there's a series of nested functions, all of which have access to the outer functions' scope. 
//In this context, we can say that closures have access to all outer function scopes.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Closures can capture variables in block scopes and module scopes as well. For example, 
// the following creates a closure over the block-scoped variable y:
function outer() {
    const x = 5;
    if (Math.random() > 0.5) {
      const y = 6;
      return () => console.log(x, y);
    }
  }
  
  outer()(); // Logs 5 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Closures over modules can be more interesting.
// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
}
//Here, the module exports a pair of getter-setter functions, which close over the module-scoped variable x. 
//Even when x is not directly accessible from other modules, it can be read and written with the functions.

import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6

//Closures can close over imported values as well, which are regarded as live bindings, 
//because when the original value changes, the imported one changes accordingly.
// myModule.js

export let x = 1;
export const setX = (val) => {
  x = val;
}
Copy to Clipboard
// closureCreator.js
import { x } from "./myModule.js";

export const getX = () => x; // Close over an imported live binding
Copy to Clipboard
import { getX } from "./closureCreator.js";
import { setX } from "./myModule.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2



