import { Component, ReactNode } from "react";

interface State {
  tasks: string[];
  input: string;
}
export default class TodoListClass extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: ["Task 1", "Task 2", "Task 3"],
      input: "",
    };
  }

  addTask = () => {
    const { tasks, input } = this.state;
    this.setState({ tasks: [...tasks, input], input: "" });
  };

  deleteTask(index: number) {
    this.setState({ tasks: this.state.tasks.filter((_, i) => i !== index) });
  }

  editTask(index: number) {
    const newContent = prompt("New Content: ");
    if (newContent)
      this.setState({
        tasks: this.state.tasks.map((task, i) =>
          i === index ? newContent : task
        ),
      });
  }

  render(): ReactNode {
    return (
      <div>
        <h1>TODO LIST CLASS</h1>
        <hr />
        <input
          type="text"
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
          placeholder="add item..."
        />
        <button onClick={this.addTask}>ADD</button>
        {this.state.tasks.map((task, i) => {
          return (
            <div key={i}>
              {task}
              <button onClick={() => this.deleteTask(i)}>Delete</button>
              <button onClick={() => this.editTask(i)}>Edit</button>
            </div>
          );
        })}
      </div>
    );
  }
}
