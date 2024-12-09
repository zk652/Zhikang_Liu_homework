// callback hell

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    first.computedStyleMap.color = "red";
    setTimeout(() => {
      second.computedStyleMap.color = "blue";
      setTimeout(() => {
        third.computedStyleMap.color = "green";
      }, 2000);
    }, 3000);
  }, 5000);
});

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1: Fetching user data...");
    callback(null, { userId: 1, username: "JohnDoe" });
  }, 1000);
}

function step2(userId, callback) {
  setTimeout(() => {
    console.log(`Step 2: Fetching posts for user ${userId}...`);
    callback(null, ["post1", "post2", "post3"]);
  }, 1000);
}

function step3(posts, callback) {
  setTimeout(() => {
    console.log(`Step 3: Fetching comments for the post "${posts[0]}"...`);
    callback(null, ["comment1", "comment2"]);
  }, 1000);
}

function step4(comments, callback) {
  setTimeout(() => {
    console.log("Step 4: Displaying comments...");
    console.log(comments);
  }, 1000);
}

step1((err, user) => {
  if (err) {
    console.error("Error in Step 1:", err);
  } else {
    step2(user.userId, (err, posts) => {
      if (err) {
        console.error("Error in Step 2:", err);
      } else {
        step3(posts, (err, comments) => {
          if (err) {
            console.error("Error in Step 3:", err);
          } else {
            step4(comments, (err) => {
              if (err) {
                console.error("Error in Step 4:", err);
              } else {
                console.log("All steps completed successfully!");
              }
            });
          }
        });
      }
    });
  }
});

function step1Promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1: Fetching user data...");
      resolve({ userId: 1, username: "JohnDoe" });
    }, 1000);
  });
}

function step2Promise(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 2: Fetching posts for user ${userId}...`);
      resolve(["post1", "post2", "post3"]);
    }, 1000);
  });
}

function step3Promise(posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Step 3: Fetching comments for the post "${posts[0]}"...`);
      resolve(["comment1", "comment2"]);
    }, 1000);
  });
}

function step4Promise(comments) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 4: Displaying comments...");
      console.log(comments);
      resolve();
    }, 1000);
  });
}

async function runSteps() {
  try {
    const user = await step1Promise();
    const posts = await step2Promise(user.userId);
    const comments = await step3Promise(posts);
    await step4Promise(comments);
    console.log("All steps completed successfully!");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

runSteps();

// Promise

function getWeather() {
  return new Promise(function (res, rej) {
    res("sunny");
  });
}

const promise = getWeather();
promise().then(onSuccess, onError);

function onSuccess(data) {
  console.log(`first param ${data}`);
}

function onError(error) {
  console.log(`second param ${error}`);
}

function getWeatherIcon() {}

getLocationName(function (locationName) {
  getLocationLaLon(locationName, function (latLon) {
    getWeather(latLon, function (weatherData) {
      getWeatherIcon(weatherData, function (weatherIcon) {
        displayWeatherIcon(weatherIcon);
      });
    });
  });
});

getLocationName()
  .then(getLocationLaLon)
  .then(getWeather)
  .then(getWeatherIcon)
  .then(displayWeatherIcon);

function func1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("404");
    }, 100);
  });
}

function func2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("aaa");
    }, 100);
  });
}

function onSuccess2(data) {
  console.log(data);
}

function onError2(errorCode) {
  console.log(`ERROR: ${errorCode}`);
}

function inTheEnd() {
  console.log("End");
}

func1().then(func2).then(onSuccess).catch(onError).finally(inTheEnd);

function fetchData() {
  return new Promise(function (res, rej) {
    fetch("https://api.weather.gov/gridpoints/OKX/35,35/forecast")
      .then((response) => response.json())
      .then((data) => res(data.properties.periods[1].shortForecast));
  });
}

function displayData(weather) {
  console.log(weather);
}

function onError(err) {
  console.log(`ERROR ${err}`);
}

fetchData().then(displayData).catch(onError);

const delayedTask = (msg, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(msg), delay);
  });
};

const runTasks = async () => {
  try {
    const result1 = await delayedTask("Task 1 completed", 1000);
    console.log(result1);

    const result2 = await delayedTask("Task 2 completed", 1500);
    console.log(result2);

    const result3 = await delayedTask("Task 3 completed", 500);
    console.log(result3);

    console.log("All tasks completed!");
  } catch (error) {
    console.error("Error:", error);
  }
};

runTasks();

// promise.all
const task1 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 1"), 1000)
);
const task2 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 2"), 2000)
);
const task3 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 3"), 1500)
);

Promise.all([task1, task2, task3])
  .then((results) => console.log("Results:", results))
  .catch((error) => console.error("Error:", error));

// promise.race
const fastTask = new Promise((resolve) =>
  setTimeout(() => resolve("Fast task"), 1000)
);
const slowTask = new Promise((resolve) =>
  setTimeout(() => resolve("Slow task"), 2000)
);

Promise.race([fastTask, slowTask])
  .then((result) => console.log("Race result:", result))
  .catch((error) => console.error("Error:", error));

//promise.any
const anytask1 = new Promise((_, reject) =>
  setTimeout(() => reject("Task 1 failed"), 1000)
);
const anytask2 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 2 succeeded"), 2000)
);
const anytask3 = new Promise((_, reject) =>
  setTimeout(() => reject("Task 3 failed"), 1500)
);

Promise.any([anytask1, anytask2, anytask3])
  .then((result) => console.log("First successful result:", result))
  .catch((error) => console.error("All promises failed:", error));

// promise.allSettled
const settledtask1 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 1 completed"), 1000)
);
const settledtask2 = new Promise((_, reject) =>
  setTimeout(() => reject("Task 2 failed"), 1500)
);
const settledtask3 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 3 completed"), 500)
);

Promise.allSettled([settledtask1, settledtask2, settledtask3]).then(
  (results) => {
    console.log("All Settled Results:");
    console.log(results);
  }
);

// async/await with Promise.all
const func = (msg, delay) => {
  return new Promise((resolve) => setTimeout(() => resolve(msg), delay));
};

const runConcurrentTasks = async () => {
  try {
    console.log("Running tasks concurrently...");
    const [result1, result2, result3] = await Promise.all([
      func("Task 1", 1000),
      func("Task 2", 2000),
      func("Task 3", 1500),
    ]);
    console.log("Results:", result1, result2, result3);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

runConcurrentTasks();
