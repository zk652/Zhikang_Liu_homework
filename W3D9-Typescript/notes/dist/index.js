"use strict";
console.log("Hello world");
let age = 1;
// age = 'a';  // invalid
if (age < 50)
    age += 10;
/**
 * any
 * unknown
 * never
 * enum
 * tuple
 */
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level; // type any
level = 1;
level = "a";
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
// let numbers: number[] = [1,2,"3"] // error
let numbers2 = [1, 2, "3"];
// tuple
let user = [1, "Mosh"];
// let user3: [number, string] = ["1", "Mosh"]; // error
// let user2: [number, string] = [1, "Mosh", 1]; // error
// enums
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var Size2;
(function (Size2) {
    Size2["Small"] = "S";
    Size2["Medium"] = "M";
    Size2["Large"] = "L";
})(Size2 || (Size2 = {}));
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map