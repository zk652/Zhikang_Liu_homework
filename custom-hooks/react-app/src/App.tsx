import "./App.css";
import Demo from "./components/Demo";
import DemoForceUpdate from "./components/DemoForceUpdate";
import DemoID from "./components/DemoID";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <Modal />
      <hr />
      <Demo />
      <hr />
      <DemoID />
      <hr />
      <DemoForceUpdate />
    </div>
  );
}

export default App;
