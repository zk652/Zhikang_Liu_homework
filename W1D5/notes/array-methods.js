const items = [
  { name: "bike", price: 100 },
  { name: "tv", price: 200 },
  { name: "album", price: 300 },
  { name: "book", price: 400 },
  { name: "phone", price: 500 },
  { name: "computer", price: 600 },
];

// filter
let filteredItems = items.filter((item) => {
  return item.price > 300;
});
console.log(items);
console.log(filteredItems);

filteredItems = items.filter((item) => {
  return item.price < 300;
});

console.log(filteredItems);

// map
const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames);

const itemPrices = items.map((item) => {
  return item.price;
});

console.log(itemPrices);

// find
const foundItem = items.find((item) => {
  return item.name === "book";
});

console.log(foundItem);

const foundItem2 = items.find((item) => {
  return item.price === 600;
});

console.log(foundItem2);

// forEach
items.forEach((item) => {
  console.log(item.name);
});

items.forEach((item) => {
  console.log(item.price);
});

// some
const expensiveItems = items.some((item) => {
  return item.price > 300;
});

console.log(expensiveItems);

const expensiveItems2 = items.some((item) => {
  return item.price > 700;
});

console.log(expensiveItems2);

// every
const hasExpensiveItems = items.every((item) => {
  return item.price > 700;
});

console.log(hasExpensiveItems);

const hasExpensiveItems2 = items.every((item) => {
  return item.price > 10;
});

console.log(hasExpensiveItems2);

// reduce
const totalPrice = items.reduce((curr, item) => {
  return item.price + curr;
}, 0);

console.log(totalPrice);

// includes
const arr = [1, 2, 3];
const includes2 = arr.includes(2);
console.log(includes2);
const includes4 = arr.includes(4);
console.log(includes4);

const person1 = {
  name: "JAck",
  age: 10,
};

const person2 = person1;
console.log("hello", person1 === person2);
