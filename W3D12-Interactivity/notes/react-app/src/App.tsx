import "./App.css";
import ClassClick from "./Components/ClassClick";
import FunctionClick from "./Components/FunctionClick";
import ControlledForm from "./Components/ControlledForm";
import Car from "./Components/UpdateObject";
import ArrayComponent from "./Components/UpdateArray";
import ArrayObjects from "./Components/UpdateArrayObject";
function App() {
  return (
    <div>
      <FunctionClick />
      <ClassClick />
      <ControlledForm />
      <Car />
      <ArrayComponent />
      <ArrayObjects />
    </div>
  );
}

export default App;
