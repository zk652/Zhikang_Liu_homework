import { useState } from "react";

export default function TodoListFunction() {
  const [list, setList] = useState<string[]>(["Task 1", "Task 2", "Task 3"]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    setList((l) => [...l, newTask]);
    setNewTask("");
  };

  const deleteTask = (index: number) => {
    setList((l) => l.filter((_, i) => i !== index));
  };

  const editTask = (index: number, newContent: string) => {
    setList((l) => l.map((task, i) => (i === index ? newContent : task)));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TODO LIST FUNCTION</h1>
      <hr />
      <input
        type="text"
        placeholder="add item..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        style={{ backgroundColor: "black", color: "white" }}
        onClick={addTask}
      >
        ADD
      </button>
      {list.map((task, index) => {
        return (
          <div key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button
              onClick={() => editTask(index, prompt("New content: ") || task)}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
}
