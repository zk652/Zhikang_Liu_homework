// use both .then and async/await to write, including error handling

// fetch API from jsonplaceholder
// .then
function fetchTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch.");
      return res.json();
    })
    .then((data) => {
      console.log("Todos: ", data);
    })
    .catch((error) => {
      console.log("Error: ", error.message);
    });
}

fetchTodos();

// async/await
const fetchTodos2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) {
      throw new Error("Failed to fetch.");
    }
    const data = await res.json();
    console.log("data: ", data);
  } catch (error) {
    console.log("Error", error.message);
  }
};

fetchTodos2();

// write a promise-based function that return a random number after a delay
const getRandomNumber = (delay) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 100);
      // console.log("random number: ", num);
      res(num);
    });
  }, delay);
};

getRandomNumber(2000).then((res) => {
  console.log("random num: ", res);
});

// use Promise.all to write an example
const promiseAll = async () => {
  try {
    const pro1 = getRandomNumber(1000);
    const pro2 = getRandomNumber(2000);
    const pro3 = getRandomNumber(3000);

    const nums = await Promise.all([pro1, pro2, pro3]);
    return nums;
  } catch (err) {
    console.log("Promise.all error: ", err.message);
  }
};

promiseAll().then((res) => console.log("Promise.all: ", res));
