import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoContextProvider from "./Context/TodoContext";
import Main from "./pages/Main";
import TodoDetails from "./pages/TodoDetails";
import AddTodo from "./pages/AddTodo";

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/todos/:id">
              <TodoDetails />
            </Route>
            <Route path="/add">
              <AddTodo />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </TodoContextProvider>
  );
}

export default App;
