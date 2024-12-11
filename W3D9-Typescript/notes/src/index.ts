console.log("Hello world");

let age: number = 1;
// age = 'a';  // invalid

if (age < 50) age += 10;

/**
 * any
 * unknown
 * never
 * enum
 * tuple
 */

let sales: number = 123_456_789;
// let num: number = "abc";  // error
let course: string = "Typescript";
let is_published: boolean = true;
let level; // type any
level = 1;
level = "a";

function render(document: any) {
  console.log(document);
}

render("abc");
render(123);

function render2(num: number) {
  console.log(num);
}
render2(123);
// render2([1,2,3]) // error
// render2("123") // error

let numbers: number[] = [1, 2, 3];
// let numbers: number[] = [1,2,"3"] // error
let numbers2: any[] = [1, 2, "3"];
// let numbers3: number[] = ['1', '2', '3'] // error

// tuple
let user: [number, string] = [1, "Mosh"];
// let user3: [number, string] = ["1", "Mosh"]; // error
// let user2: [number, string] = [1, "Mosh", 1]; // error
let arr: [number, number[], string[]] = [111, [1, 2, 3], ["1", "2", "a"]];

// enums
const small = 1;
const medium = 2;
const large = 3;

enum Size {
  Small = 1, // value is 0 by default
  Medium,
  Large,
}

enum Size2 {
  Small = "S",
  Medium = "M",
  Large = "L",
}

let mySize: Size = Size.Medium;
console.log(mySize);

// enum nums {          // error
//   num1 = [1,2,3],
//   num2,
//   num3,
// }

// function
function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 50000) return income * 1.2;
  return income * 1.3;
}
// function calculateTax2(income: number): number {     // error
//   return "11";
// }

// calculateTax(10000, 2022, 1); // error
calculateTax(10000, 2022);
calculateTax(10000);

// object
let employee: {
  readonly id: number;
  name?: string; // make it optional
  retire: (date: Date) => void;
} = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};

employee.name = "Mosh";
// employee.id = 3; // error

// type alias
type Employee = {
  readonly id: number;
  name?: string; // make it optional
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};

// union type
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10kg");

// intersection type
let weight: number & string;

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {
    console.log("Drag");
  },
  resize: () => {
    console.log("Resize");
  },
};

textBox.drag();
textBox.resize();

// literal types
// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// nullable types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);

// optional chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let a: number = 123;
console.log(a < 200 ? "True" : "False");

let customer = getCustomer(0);
if (customer !== null && customer !== undefined) console.log(customer.birthday);

// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customer?.[0]

// Optional call
let log: any = null;
log?.("a");
