import "./App.css";
import CatFact from "./FetchAPI.tsx/CatFact";
import Excuse from "./FetchAPI.tsx/Excuse";
import PredictAge from "./FetchAPI.tsx/PredictAge";
import MainPage from "./Lifecycle-Methods/MainPage";
import Text from "./UseEffect/Text";

// React Components's lifecycle: Initialization -> Mounting -> updating -> unmounting

function App() {
  return (
    <div>
      {/* <MainPage /> */}
      {/* <Text /> */}
      {/* <CatFact /> */}
      {/* <PredictAge /> */}
      <Excuse />
    </div>
  );
}

export default App;
