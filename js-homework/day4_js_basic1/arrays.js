// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false

  const num = Number(str);
  if (isNaN(num)) return false;
  else return true;
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3

  if (arr.length === 0) return 0;

  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(Number(arr[i]))) {
      count++;
    }
    sum += Number(arr[i]);
  }
  if (count === 0) return 0;
  return sum / arr.length;
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];

  if (people.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < people.length; i++) {
    sum += people[i].age;
  }
  return sum / people.length;
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)

  let sum = 0;
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    sum += people[i].job === job ? people[i].age : 0;
    count += people[i].job === job ? 1 : 0;
  }
  if (count === 0) return 0;
  return sum / count;
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];

  if (arr.length === 0) return 0;

  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (num < arr[i]) num = arr[i];
  }
  return num;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';

  const strs = str.split(" ");
  let s = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (s.length < strs[i].length) s = strs[i];
  }
  return s;
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) res.push(arr[i]);
  }
  return res;
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]

  const arr = [...num];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const a = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = a;
      }
    }
  }
  return arr;
}

export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.

  for (let i = 0; i < num.length - 1; i++) {
    for (let j = 0; j < num.length - i - 1; j++) {
      if (num[j] > num[j + 1]) {
        const a = num[j];
        num[j] = num[j + 1];
        num[j + 1] = a;
      }
    }
  }
  return num;
}

export function removeTypes(arr, typeToRemove) {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== typeToRemove) res.push(arr[i]);
  }
  return res;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (operator === "+") {
      res.push(nums[i] + amount);
    } else if (operator === "-") {
      res.push(nums[i] - amount);
    } else if (operator === "*") {
      res.push(nums[i] * amount);
    } else if (operator === "/") {
      res.push(nums[i] / amount);
    }
  }
  return res;
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== num) res.push(nums[i]);
  }
  return res;
}
