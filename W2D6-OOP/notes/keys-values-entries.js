let westeros = {
  cersei: "Lannister",
  arya: "stack",
  jon: "snow",
  brienne: "tarth",
};

let keys = Object.keys(westeros);
console.log("Keys ", keys);
let vals = Object.values(westeros);
console.log("Values ", vals);
let entries = Object.entries(westeros);
console.log("Entries ", entries);
console.log(entries[2][1]);

let fruits = {
  1: "apple",
  2: "peach",
  3: "banana",
  4: "pear",
};

let keys2 = Object.keys(fruits);
console.log("Keys ", keys2);
let vals2 = Object.values(fruits);
console.log("Values ", vals2);
let entries2 = Object.entries(fruits);
console.log("Entries ", entries2);
console.log(entries2[3][1]);
