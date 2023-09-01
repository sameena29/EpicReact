const counter = (function () {
  //counter is an wrapper
  let privateCounter = 0;
  function changeBy(val) {
    // A private func that can be called only within counter
    privateCounter += val;
  }

  return {
    //increment, decrement and value are three different functions
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

///////////////////////////////////////////////////////////////////////////////
//Try to understand this the above code from this skeleton code
const whatAmI = (function () {
  // Here a is an IIFE(immidiately invoked function expression)
  let a = 0; // Because of which whatAmI is an onject (as the return value of this particular IIFE is an onject)

  return {
    increment() {
      return 1;
    },

    decrement() {
      return -1;
    },

    value() {
      return a;
    },
  };
})();

console.log(counter.increment()); // 1.
console.log(counter.decrement()); // -1.
console.log(counter.value()); // 0.
///////////////////////////////////////////////////////////////////////////////

const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.
