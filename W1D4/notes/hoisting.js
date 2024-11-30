function sumFunc(a, b) {
  return a + b;
}

const sumConst = (a, b) => a + b;

console.log(`sumFunc(1,2) => ${sumFunc(1, 2)}`);
console.log(`sumConst(1,2) => ${sumConst(1, 2)}`);

// still work

// const sumConst = (a, b) => a + b;
// console.log(`sumFunc(1,2) => ${sumFunc(1, 2)}`);
// console.log(`sumConst(1,2) => ${sumConst(1, 2)}`);
// function sumFunc(a, b) {
//   return a + b;
// }

// not work
// console.log(`sumFunc(1,2) => ${sumFunc(1, 2)}`);
// console.log(`sumConst(1,2) => ${sumConst(1, 2)}`);
// function sumFunc(a, b) {
//   return a + b;
// }

// const sumConst = (a, b) => a + b;

console.log(a); // no error, undefined

var a = 2;

// console.log(b); // reference error
// let b = 2;

// console.log(c); // reference error
// const c = 2;
