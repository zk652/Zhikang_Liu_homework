const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  const entries = Object.entries(people);
  const total = entries.reduce((sum, person) => sum + person[1].age, 0);
  return total / entries.length;
};
