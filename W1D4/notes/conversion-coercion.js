let string = "1";
console.log(Number(string));

let num = 100;
let res = num + "";
console.log(res, typeof res);

let x = parseInt("123 aaa");
console.log(x); // 123

let age = 1;
let age2 = "1";
let age3 = age + age2;
console.log(age3, typeof age3); // 11 string

// let age = "1";
// let age2 = 1;
// let age3 = age + age2;
// console.log(age3, typeof age3); // 11 string

let a = 1;
let b = "a";
let c = a + b;
console.log(c, typeof c); // 1a string

let d = "100";
let e = 10;
let f = d + e;
console.log(f, typeof f); // 10010 string

let num1 = 1;
let num2 = "1";
console.log(num1 == num2);
console.log(num1 === num2);

let num3 = 100;
let num4 = "100";
console.log(num3 == num4);
console.log(num3 === num4);
