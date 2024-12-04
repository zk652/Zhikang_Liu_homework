// es6 feature Class

class Book {
  constructor(title, author, year) {
    (this.title = title), (this.author = author), (this.year = year);
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
    this.revise = true;
  }

  static topBookStore() {
    return "Barnes & Noble";
  }
}

// Instantiate Object
const book1 = new Book("Book One", "John Doe", 2011);
console.log(book1);
book1.revise(2022);
console.log(book1);
// book1.topBookStore(); // doesn't work
console.log(Book.topBookStore());

const book2 = new Book("Book Two", "Jane Doe", 2222);

/**--------------------Sub-class-------------------------*/

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate Magazine
const mg1 = new Magazine("Mag One", "John Doe", 2019, "Jan");

console.log(mg1);
mg1.revise(2012);
console.log(mg1);
console.log(mg1.getSummary());

class MathUtil {
  static PI = 3.14159;
  static getDiameter(radius) {
    return radius * 2;
  }

  static getcircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getcircumference(5));
console.log(MathUtil.getArea(5));

const MathUtil1 = new MathUtil();

console.log(MathUtil1.PI);

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount}`);
  }
  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
console.log(user1.username);
console.log(user2.username);
User.getUserCount();
