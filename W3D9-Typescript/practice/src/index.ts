let string: string = "1";
console.log(Number(string));

let num: number = 100;
let res: string = num + "";
console.log(res, typeof res);

let x: number = parseInt("123 aaa");
console.log(x); // 123

let age: number = 1;
let age2: string = "1";
let age3: string = age + age2;
console.log(age3, typeof age3); // 11 string

let a: number = 1;
let b: string = "a";
let c: string = a + b;
console.log(c, typeof c); // 1a string

let d: string = "100";
let e: number = 10;
let f: string = d + e;
console.log(f, typeof f); // 10010 string

interface Item {
  name: string;
  price: number;
}
const items: Item[] = [
  { name: "bike", price: 100 },
  { name: "tv", price: 200 },
  { name: "album", price: 300 },
  { name: "book", price: 400 },
  { name: "phone", price: 500 },
  { name: "computer", price: 600 },
];

let filteredItems: Item[] = items.filter((item: Item) => {
  return item.price > 300;
});
console.log("items: ", items);
console.log("filteredItems: ", filteredItems);

const itemNames: string[] = items.map((item: Item) => {
  return item.name;
});
console.log(itemNames);

const foundItem: Item | undefined = items.find((item: Item) => {
  return item.name === "book";
});

console.log(foundItem);

items.forEach((item: Item) => {
  console.log(item.name);
});

const expensiveItems: boolean = items.some((item: Item) => {
  return item.price > 300;
});

console.log(expensiveItems);

const hasExpensiveItems: boolean = items.every((item: Item) => {
  return item.price > 700;
});

console.log(hasExpensiveItems);

const totalPrice: number = items.reduce((curr, item) => {
  return item.price + curr;
}, 0);

console.log(totalPrice);

const arr = [1, 2, 3];
const includes2: boolean = arr.includes(2);
console.log(includes2);

const letters: string[] = ["a", "b", "c", "d", "e"];
const numbers: number[] = [1, 2, 3, 4, 5];

const [letterA, letterB]: string[] = letters;
console.log(a);
console.log(b);

const [l1, , l3]: string[] = letters;
console.log(l1);
console.log(l3);

const [letter1, ...rest]: string[] = letters;
console.log(letter1);
console.log(rest);

class Book {
  title: string;
  author: string;
  year: number;
  revised?: boolean;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary(): string {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge(): string {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(newYear: number): void {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore(): string {
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

const delay = (num: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Resolved after ${num} ms`);
    }, num);
  });
};

delay(1000)
  .then((res) => console.log(res))
  .catch((error) => console.error(error));

const fetchData = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
};

const runAsyncFunction = async () => {
  try {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

runAsyncFunction();

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed");
  }
  const data: Post[] = await response.json();
  return data;
};

const displayPosts = async () => {
  try {
    const posts = await fetchPosts();
    console.log("First Post:", posts[0]);
  } catch (error) {
    console.error("Error:", error);
  }
};

displayPosts();

const task = (name: string, delay: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} completed after ${delay} ms`);
    }, delay);
  });
};

const runParallelTasks = async () => {
  try {
    const results = await Promise.all([
      task("Task 1", 1000),
      task("Task 2", 2000),
      task("Task 3", 1500),
    ]);
    console.log("Results: ", results);
  } catch (error) {
    console.error("Error: ", error);
  }
};

runParallelTasks();
