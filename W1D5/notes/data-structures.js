const arr = ["a", "b", "c", "d"];
console.log(arr);
console.log(arr[1]);
console.log(arr[0]);
console.log(arr[6]); // undefined
console.log(arr.length);

arr.push("e");
console.log(arr.length);
console.log(arr);

arr.push(1);
console.log(arr.length);
console.log(arr);

arr.push([1, 2]);
console.log(arr.length);
console.log(arr);

const arr2 = [
  [1, 2],
  ["a", "b"],
];
console.log(arr2.length);
console.log(arr2);
console.log(arr2[1][1]);

const person1 = {
  firstName: "bob",
  lastName: "pants",
  age: 12,
  isEmployed: true,
};
console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
console.log(person1.car); // undefined
person1.age += 2;
console.log(person1);
console.log(person1.age);

const person2 = person1;
console.log(person2);
person1.firstName = "aaa";
console.log(person2);

const person3 = {
  sayHello: function () {
    console.log("Hey, I'm person3");
  },
};

person3.sayHello();
