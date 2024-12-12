import { ChangeEvent, useState } from "react";

export function TodoList() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewTask(event.target.value);
  };

  const addTask = (): void => {
    setTodoList((list) => [...list, newTask]);
    setNewTask("");
  };

  const deleteTask = (index: number) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="addTask">
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list"></div>
      {todoList.map((task, index) => {
        return (
          <div key={index}>
            <span>{task}</span>
            {/* <button onClick={deleteTask(index)}>X</button> /**doesn't work  */}
            <button onClick={() => deleteTask(index)}>X</button>
          </div>
        );
      })}
    </div>
  );
}
