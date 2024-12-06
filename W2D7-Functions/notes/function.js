function printMe() {
  console.log("Printing......");
}
printMe();

function printThis(param) {
  console.log(param);
}
printThis("tapas");

const print = function () {
  console.log("Print");
};
print();

const printWithParam = function (param) {
  console.log(param);
};
printWithParam("With param");

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));
console.log("One param: ", sum(2));
console.log("No param: ", sum());
let p = sum(1, 2);
console.log(p);

// default values
function calc(a = 0, b = 0) {
  return a + b;
}
console.log(calc(1, 2));
console.log("One param: ", calc(1));
console.log("No param: ", calc());

// rest param
function collectThings(x, ...y) {
  console.log(x);
  console.log(y);
}
collectThings(1, 2, 3, 4, 5);
collectThings(1);

// Wrong
// function collectThings2(...x, y) {
//  console.log("CollectThing2")
// }
// collectThings2()

/**-----------------Arrow function------------------*/
const addFunc = function (x, y) {
  return x + y;
};
console.log(addFunc(11, 22));

const addFuncArrow = (x, y) => {
  return x + y;
};
console.log(addFuncArrow(22, 33));

const addFuncArrow2 = (x, y) => x + y;
console.log(addFuncArrow2(33, 44));

/**-----------------Nested functions------------------*/
function outer() {
  console.log("outer");
  function inner() {
    console.log("inner");
  }
  inner();
}
outer();

/**--------------------Closure------------------------*/
function outer2(x) {
  function inner2(y) {
    return x + y;
  }
  return inner2;
}

const output = outer2(10);
console.log(output);
console.log(output(2));

const output2 = outer2();
console.log(output2);
console.log(output2());
console.log(output2(2));

function outerFunc(outerVar) {
  const hi = "hi";
  return function innerFunc(innerVar) {
    console.log("Outer Var: " + outerVar);
    console.log("Inner Var: " + innerVar);
    console.log(hi);
  };
}
const newFunc = outerFunc("outside");
newFunc("inside");
newFunc();

/**--------------------Callback function------------------------*/
function foo(bar) {
  bar();
}

foo(function () {
  console.log("Hello");
});

function hi() {
  console.log("hi");
}
foo(hi);

function foo2(bar) {
  if (isNight) {
    bar();
  }

  if (isDrinksOverCheckOnline) {
    bar();
  }
}

/**--------------------Higher Order Function------------------------*/
// It takes one or more functions as argument
// It may return a function

function getCapture(camera) {
  camera();
}

getCapture(function () {
  console.log("Camera");
});

function returnFn() {
  return function () {
    console.log("returning");
  };
}
const fn = returnFn;
console.log(fn);
fn();
const fn2 = returnFn();
console.log(fn2);
fn2();

/**--------------------Pure Function------------------------*/
// pure function
function sayGreeting(name) {
  return `Hello ${name}`;
}

console.log(sayGreeting("Jack"));

let greeting = "hello";
// not pure function
function sayGreeting2(name) {
  return `${greeting} ${name}`;
}
sayGreeting2("Jack");

/**--------------------IIFE------------------------*/
// immediately invoked function expression

(function () {
  console.log("IIFE");
})();

(function (x, y) {
  console.log(x + y);
})(1, 2);

(function (x, ...y) {
  console.log(x, y);
})(1, 2, 3, 4, 5);

/**--------------------Recursion------------------------*/
function recurse() {
  if (base_condition) {
    // do something
    return;
  }
  recurse();
}

function fetchWater(count) {
  if (count === 0) {
    console.log("No more water");
    return;
  }

  console.log("Fetching water...");
  fetchWater(count - 1);
}
fetchWater(3);

function timer(tick) {
  if (tick === 5) {
    console.log("hello");
    return;
  }

  console.log("ticking...");
  timer(tick + 1);
}
timer(0);

/**--------------------Currying------------------------*/
const sandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    };
  };
};
console.log(sandwich("apple"));
console.log(sandwich("apple")("peach"));
console.log(sandwich("apple")("peach")("banana"));

const sammy = (ingred1) => (ingred2) => (ingred3) =>
  `${ingred1}, ${ingred2}, ${ingred3}`;
const mySammy = sammy("turkey")("cheese")("bread");
console.log(mySammy);

const multiply = (x, y) => x * y;
const curriedMultiply = (x) => (y) => x * y;
console.log(multiply(1, 2));
console.log(curriedMultiply(2));
console.log(curriedMultiply(2)(2));
const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(3));
