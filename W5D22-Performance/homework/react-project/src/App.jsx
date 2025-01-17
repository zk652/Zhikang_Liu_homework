import "./App.css";
import BirthdayTable from "./components/BirthdayTable";
import DebounceCallback from "./components/DebounceCallback";

function App() {
  return (
    <div>
      <h1>BirthdayTable</h1>
      <BirthdayTable />
      <hr />
      <h1>DebounceCallback</h1>
      <DebounceCallback />
    </div>
  );
}

export default App;
