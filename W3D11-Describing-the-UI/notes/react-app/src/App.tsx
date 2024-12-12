import { ChangeEvent, useState } from "react";
import "./App.css";
import { Users } from "./Users";
import { FoodsComponent } from "./FoodsComponent";
import { TodoList } from "./todoList/TodoList";
import Welcome from "./classComponents/Welcome";

interface UserProps {
  name: string;
  age: number;
  email?: string;
}

interface JobProps {
  salary: number;
  position: string;
  company: string;
}

interface PlanetsProps {
  name: string;
  isGasPlanet: boolean;
}

function App() {
  const name: string = "Pedro";
  const name2: JSX.Element = <h1>Jack</h1>;
  const age: JSX.Element = <h2>21</h2>;
  const email: JSX.Element = <h2>pedro@pedro.com</h2>;
  const name3: string = getName();

  const age2: number = 16;
  const isGreen: boolean = false;
  const showButton: boolean = true;

  const names: string[] = ["Pedro", "Jack", "Jessica", "mike"];

  const users: UserProps[] = [
    { name: "Pedro", age: 21 },
    { name: "Jake", age: 23 },
    { name: "Jessica", age: 25 },
  ];

  const planets: PlanetsProps[] = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  const [ageButton, setAgeButton] = useState<number>(0);

  const increaseAge = (): void => {
    setAgeButton(ageButton + 1);
  };

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const [showText, setShowText] = useState<boolean>(true);

  const handleShowText = (): void => {
    setShowText(!showText);
  };

  const [textColor, setTextColor] = useState<string>("black");

  const [count, setCount] = useState<number>(0);

  const handleIncrease = (): void => {
    setCount(count + 1);
  };
  const handleDecrease = (): void => {
    setCount(count - 1);
  };
  const handleSetToZero = (): void => {
    setCount(0);
  };

  return (
    <div>
      <Welcome />
      {name2}
      <h1>Hello world, {name}</h1>
      <div>{age}</div>
      <div>{email}</div>
      <User name="Pedro" age={21} email="pedro@pedro.com" />
      <User name="Jake" age={22} email="jake@jake.com" />
      <User name="Jessica" age={23} email="jessica@jessica.com" />
      <Job salary={90000} position="Senior SDE" company="Apple" />
      {name3}
      <GetNameComponent />

      <h1 className="name">Pedro</h1>

      {age2 >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
      <h1 style={{ color: isGreen ? "green" : "pink" }}>THIS HAS COLOR</h1>
      {showButton && (
        <button style={{ background: "gray" }}>This is a button</button>
      )}

      <h1>{names[1]}</h1>

      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}

      {users.map((user, key) => {
        return <Users key={key} name={user.name} age={user.age} />;
      })}

      {planets.map((planet, key) => {
        if (planet.isGasPlanet) return <h1 key={key}>{planet.name}</h1>;
      })}

      <div>
        {ageButton}
        <button onClick={increaseAge}>Increase Age</button>
      </div>

      <div>
        <input type="text" onChange={handleInputChange} />
        {inputValue}
      </div>

      <div style={{ marginTop: 50 }}>
        <button onClick={handleShowText}>Show/Hide</button>
        <button
          onClick={() => setTextColor(textColor === "black" ? "red" : "black")}
        >
          change Color
        </button>
        {showText && (
          <h1 style={{ marginTop: -10, color: textColor }}>
            HI MY NAME IS PEDRO
          </h1>
        )}
      </div>

      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleSetToZero}>Set to Zero</button>
        <h2>{count}</h2>
      </div>

      <FoodsComponent />
      <hr />
      <TodoList />
    </div>
  );
}

const getName = () => {
  return "Pedro";
};

const GetNameComponent: React.FC = () => {
  return <h1>Pedro</h1>;
};

const User: React.FC<UserProps> = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

const Job: React.FC<JobProps> = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;
