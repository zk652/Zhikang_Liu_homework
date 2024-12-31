import { Grandchild, Parent } from "./components/Example1";
import Reducer from "./components/ReducerEx";
import ReducerEx2 from "./components/ReducerEx2";
import TaskApp from "./components/TaskList/TaskApp";

function App() {
  return (
    <div>
      {/* <Parent />
      <Grandchild /> */}
      <Reducer />
      <hr />
      <ReducerEx2 />
      <hr />
      <TaskApp />
    </div>
  );
}

export default App;
