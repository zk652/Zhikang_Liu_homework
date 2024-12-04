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

// Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine("Mag One", "John Doe", "2019", "Jan");
const mag2 = new Magazine("Mag Two", "Jane Doe", "2022", "Feb");
const mag3 = new Magazine("Mag three", "Jack Doe", "2023", "May");

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
console.log(mag1.getSummary());
console.log(mag2);
console.log(mag2.year);
console.log(mag3);
console.log(mag3.month);
