import "./App.css";
import TodoListFunction from "./TodoListFunction";
import TodoListClass from "./TodoListClass";
import ControlledComponents from "./ControlledComponents";
function App() {
  return (
    <div>
      <TodoListFunction />
      <TodoListClass />
      <br />
      <br />
      <br />
      <h1>Controlled Components</h1>
      <ControlledComponents />
    </div>
  );
}

export default App;
