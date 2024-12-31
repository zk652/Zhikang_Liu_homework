import { Provider } from "react-redux";
import "./App.css";
import UserList from "./components/UserList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
