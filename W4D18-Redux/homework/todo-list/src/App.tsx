import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
