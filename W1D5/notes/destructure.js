const letters = ["a", "b", "c", "d", "e"];
const numbers = [1, 2, 3, 4, 5];

const [a, b] = letters;
console.log(a);
console.log(b);

const [l1, , l3] = letters;
console.log(l1);
console.log(l3);

const [letter1, ...rest] = letters;
console.log(letter1);
console.log(rest);

// const [first, ...middle, last] = letters; // doesn't work

const [num1, num2, num3, num4] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

const newArr = [...letters, ...numbers];
console.log(newArr);

const newArr2 = [...numbers, ...letters];
console.log(newArr2);

function sumMul(a, b) {
  return [a + b, a * b];
}

const arr = sumMul(2, 3);
console.log(arr);

const [sum, multiply, division = "No division"] = sumMul(2, 3);
console.log(sum, multiply, division);

const personOne = {
  name: "Sally",
  age: 32,
  address: {
    city: "Somewhere",
    state: "CA",
  },
};

const { name: firstName, age, ...restInfo } = personOne;
console.log(firstName, age, restInfo);

const { favorite = "rice" } = personOne;
console.log(favorite);

const {
  address: { city },
} = personOne;
console.log(city);

const personTwo = {
  name: "Tom",
  height: 10,
  weight: 100,
};

const personThree = { ...personOne, ...personTwo };
console.log(personThree);

function printUser({ name, age = 11, favoriteFood = "Watermelon" }) {
  console.log(`Name is: ${name}. Age is ${age}. Food is ${favoriteFood}`);
}

printUser(personOne);
printUser(personTwo);

///------------Optonal Chaining----------------///
const personInfo = {
  name: "Kyle",
  age: 24,
  address: {
    street: "Somewhere",
  },
};

console.log(personInfo?.address?.street);
console.log(personInfo?.address?.city);
console.log(personInfo?.car);

///------------Ternary operator----------------///
let aa = 21;
console.log(aa > 20 ? "true" : "false");
console.log(aa < 20 ? "true" : "false");

let time = 16;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting);

let is_student = true;
console.log(is_student ? "yes" : "no");

let purchaseAmount = 123;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(
  `Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`
);

///------------logical operators----------------///
const temp = 20;
if (temp > 0 && temp <= 30) {
  console.log("The weather is GOOD");
} else {
  console.log("The weather is BAD");
}
if (temp < 0 || temp > 30) {
  console.log("The weather is GOOD");
} else {
  console.log("The weather is BAD");
}

const sunny = false;
if (!sunny) {
  console.log("The weather is not sunny");
}
