const book = {
  title: "Book",
  author: "Jane Doe",
  year: 2011,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

// get values of an object
console.log(Object.values(book));
// get keys of an object
console.log(Object.keys(book));

/**------------------- Prototypes ------------------------ */

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise / Change Year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revise = true;
};

// change title
Book.prototype.changeTitle = function (newTitle) {
  this.title = newTitle;
  this.revise = true;
};

// add pageNumber property
Book.prototype.addPageNumber = function (pageNumber) {
  this.pageNumber = pageNumber;
};

// Instantiate an object
const book1 = new Book("book1", "john", 2000);
const book2 = new Book("book2", "jane", 2001);

console.log(book1.title);
console.log(book1.getSummary());
console.log(book2);
console.log(book2.getAge());
book2.revise(2020);
console.log(book2);
book2.changeTitle("new title");
console.log(book2);
book2.addPageNumber(200);
console.log(book2);
