/**
 *  Var vs Let vs Const
 *
 */

console.log(varVariable); // undefined

// console.log(letVariable); // referenceError

// console.log(constVariable); // referenceError

const constVariable = 2;

// constVariable = 3;  // const variable is not changeable

if (true) {
  var varVariable = "this is true"; // function scope
}

var varVariable = "this is true"; // var can be redeclared

console.log(varVariable);

if (true) {
  let letVariable = "this is true"; // block scope

  // let letVariable = "this is false";
  console.log(letVariable);
}

// console.log(letVariable); // letVariable is not defined

const constVar = { name: "Bob" };
constVar.name = "sally"; // we can change the property of a const variable
console.log(constVar);
// constVar = { age: 2 };  // doesn't work
// console.log(constVar);
