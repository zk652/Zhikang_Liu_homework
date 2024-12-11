"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
let a = 1;
let b = "a";
let c = a + b;
console.log(c, typeof c); // 1a string
let d = "100";
let e = 10;
let f = d + e;
console.log(f, typeof f); // 10010 string
const items = [
    { name: "bike", price: 100 },
    { name: "tv", price: 200 },
    { name: "album", price: 300 },
    { name: "book", price: 400 },
    { name: "phone", price: 500 },
    { name: "computer", price: 600 },
];
let filteredItems = items.filter((item) => {
    return item.price > 300;
});
console.log("items: ", items);
console.log("filteredItems: ", filteredItems);
const itemNames = items.map((item) => {
    return item.name;
});
console.log(itemNames);
const foundItem = items.find((item) => {
    return item.name === "book";
});
console.log(foundItem);
items.forEach((item) => {
    console.log(item.name);
});
const expensiveItems = items.some((item) => {
    return item.price > 300;
});
console.log(expensiveItems);
const hasExpensiveItems = items.every((item) => {
    return item.price > 700;
});
console.log(hasExpensiveItems);
const totalPrice = items.reduce((curr, item) => {
    return item.price + curr;
}, 0);
console.log(totalPrice);
const arr = [1, 2, 3];
const includes2 = arr.includes(2);
console.log(includes2);
const letters = ["a", "b", "c", "d", "e"];
const numbers = [1, 2, 3, 4, 5];
const [letterA, letterB] = letters;
console.log(a);
console.log(b);
const [l1, , l3] = letters;
console.log(l1);
console.log(l3);
const [letter1, ...rest] = letters;
console.log(letter1);
console.log(rest);
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
    static topBookStore() {
        return "Barnes & Noble";
    }
}
const book1 = new Book("Book One", "John Doe", 2011);
console.log(book1);
book1.revise(2022);
console.log(book1);
console.log(Book.topBookStore());
const book2 = new Book("Book Two", "Jane Doe", 2222);
console.log(book2);
const delay = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Resolved after ${num} ms`);
        }, num);
    });
};
delay(1000)
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
});
const runAsyncFunction = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Fetching data...");
        const data = yield fetchData();
        console.log(data);
    }
    catch (error) {
        console.error("Error:", error);
    }
});
runAsyncFunction();
const fetchPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("Failed");
    }
    const data = yield response.json();
    return data;
});
const displayPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield fetchPosts();
        console.log("First Post:", posts[0]);
    }
    catch (error) {
        console.error("Error:", error);
    }
});
displayPosts();
const task = (name, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} completed after ${delay} ms`);
        }, delay);
    });
};
const runParallelTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield Promise.all([
            task("Task 1", 1000),
            task("Task 2", 2000),
            task("Task 3", 1500),
        ]);
        console.log("Results: ", results);
    }
    catch (error) {
        console.error("Error: ", error);
    }
});
runParallelTasks();
