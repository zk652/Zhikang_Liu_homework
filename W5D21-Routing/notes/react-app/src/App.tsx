import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter basename="/tutorial">
      <div className="App">
        {/* <h1>React Router</h1> */}
        <Header />
        <button onClick={() => setLogin(!login)}>
          {login ? "Log out" : "Login"}
        </button>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            {/* {login ? <Profile /> : <Redirect to="/" />} */}
            <Profile login={login} />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
