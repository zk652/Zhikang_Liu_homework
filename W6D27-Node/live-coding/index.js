const array = require("lodash/array");
const sum = require("./math.js");
const finalArr = array.chunk([1, "2", "a", "b", "c"], 2);

console.log(finalArr);

console.log(sum(1, 2));
