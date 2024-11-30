let num = 2;
let channel = "Dev Dreamer";
let newNum = 2.2;

console.log(typeof num); // number
console.log(typeof channel); // string
console.log(typeof newNum); // number

console.log(1 > 100); // false
console.log(1 < 100); // true

let js = "cool";
console.log(js == "cool"); // true

let bigNum = 1111111111111n;
console.log(typeof bigNum); // bigint

let channelName;
console.log(channelName); // undefined

let myList = ["a", "b", "c", 1];
console.log(typeof myList); // object
// Arrays are a special kind of object.
// When you use typeof on an array, it will return "object"
console.log(Array.isArray(myList)); // true

function hello() {
  console.log("hello");
}

hello();
console.log(typeof hello); // function

let character = {
  name: "name",
  color: "red",
  speed: 1000,
};

console.log(typeof character); // object

let c = [1, 2];
let d = c;
d.push(3);
console.log(c);
d = [3, 4, 5];
d.push(6);
console.log(d);

d = c;
console.log(d === c);
console.log(d == c);

c = [1, 2]; // 0x01
d = [1, 2]; // 0x02
console.log(d === c); // false, compares the memory address
console.log(d == c); // false

add(c, 3); // [1,2,3]
console.log(c);
function add(arr, el) {
  arr.push(el);
}

add2(c, 3); // [1,2,3]
function add2(arr, el) {
  arr = [el];
}
