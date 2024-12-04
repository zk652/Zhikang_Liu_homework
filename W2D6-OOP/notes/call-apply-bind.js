// call
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));

// apply
const obj = { name: "John" };

let greeting = function (a, b) {
  return `${a} ${this.name}. ${b}`;
};

console.log(greeting.apply(obj, ["hello", "how are you?"]));

const numbers = [1, 2, 3, 4, 5];
console.log(Math.max.apply(null, numbers));

// bind
let bound = greeting.bind(obj);
console.log(bound("Hello", "How are you?"));
