const express = require("express");
const app = express();
app.use(express.json());

const todos = [
  {
    id: "1",
    task: "task1",
    completed: true,
  },
  {
    id: "2",
    task: "task2",
    completed: false,
  },
  {
    id: "3",
    task: "task3",
    completed: true,
  },
  {
    id: "4",
    task: "task4",
    completed: false,
  },
];

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find((t) => t.id === id);
  console.log(todo);
  if (todo) res.json(todo);
  else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.post("/todos", (req, res) => {
  const { task, completed } = req.body;
  if (!task) return res.status(400).json({ message: "Task is required" });
  const newTodo = {
    id: String(+todos[todos.length - 1].id + 1),
    task,
    completed,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  const todo = todos.find((t) => t.id === id);
  if (todo) {
    if (task !== undefined) todo.task = task;
    if (completed !== undefined) todo.completed = completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((t) => t.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.listen(3000, () => {
  console.log("Listening to port 3000...");
});
