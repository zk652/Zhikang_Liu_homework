//Value vs Reference
// Primitives pass values:
let x = 2;
let y = x;
y += 1;
console.log(y);
console.log(x);

// Structural types use references:
let xArr = [1, 2, 3];
let yArr = xArr;
yArr.push(4);
console.log(yArr);
console.log(xArr);

// Mutable vs Immutable

// Primitives are immutable
let name = "Dave";
name[0] = "a";
console.log(name);
name[2] = "b";
console.log(name);

// Reassignment is not the same as mutable
name = "aaa";
console.log(name);
name = "bbb";
console.log(name);

// Structures contain mutable data
yArr[0] = 9;
console.log(yArr);
console.log(xArr);
yArr[2] = 10;
console.log(yArr);
console.log(xArr);

// Pure functions require you to avoid mutating the data

// Impure function that mutates the data
const addToScoreHistory = (arr, score) => {
  arr.push(score);
  return arr;
};

const scoreArr = [44, 33, 22];
console.log(addToScoreHistory(scoreArr, 11));

// This mutates the original array.
// This is considered to be a side-effect.

// Notice: "const" does not make the array immutable

// Shallow copy vs. Deep copy (clones)

// shallow copy with the spread operator
const zArr = [...yArr, 1];
console.log(zArr);
console.log(yArr);

console.log(xArr === yArr);
console.log(zArr === yArr);

// with object.assign()
const tArr = Object.assign([], zArr);
console.log(tArr);
console.log(tArr === zArr); // false
tArr.push(111);
console.log(zArr);
console.log(tArr);

yArr.push([1, 2, 3]);
const vArr = [...yArr];
console.log(vArr);
vArr[4].push(4);
console.log(vArr);
console.log(yArr);
// nested structural data types still share a reference

// Deep Copy
const scoreObj = {
  first: 22,
  second: 11,
  third: { a: 1, b: 2 },
};

scoreObj.third.a = 8;
console.log(scoreObj);

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);
console.log(newScoreObj === scoreObj);
