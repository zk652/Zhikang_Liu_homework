import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div>
        <ItemContainer cake />
        <ItemContainer />
        <hr />
        <CakeContainer />
        <hr />
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
        <hr />
        <NewCakeContainer />
        <hr />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
