import "./App.css";
import ParentComp from "./components/ParentComp";
import PureComp from "./components/PureComp";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import ParentTwo from "./Optimization/ParentTwo";

function App() {
  return (
    <div>
      <ParentTwo />
      <hr />
      <ParentComp />
      <hr />
      <UseMemo />
      <hr />
      <UseCallback />
    </div>
  );
}

export default App;
