import { ChangeEvent, useState } from "react";

interface Car {
  year: number;
  make: string;
  model: string;
}

export default function ArrayObjects() {
  const [cars, setCars] = useState<Car[]>([]);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const addCar = () => {
    const newCar = { year: year, make: make, model: model };
    setCars((c) => [...c, newCar]);
    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  };

  const removeCar = (index: number) => {
    setCars((c) => c.filter((_, i) => i !== index));
  };

  const yearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(parseInt(e.target.value));
  };
  const makeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMake(e.target.value);
  };
  const modelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setModel(e.target.value);
  };

  return (
    <div>
      <h2>Lists of Car Objects</h2>
      <ul>
        {cars.map((car, index) => {
          return (
            <li key={index}>
              {car.year} {car.make} {car.model}
              <button onClick={() => removeCar(index)}>X</button>
            </li>
          );
        })}
      </ul>
      <input type="number" value={year} onChange={yearChange} />
      <input
        type="text"
        value={make}
        onChange={makeChange}
        placeholder="Enter car make"
      />
      <input
        type="text"
        value={model}
        onChange={modelChange}
        placeholder="Enter car model"
      />
      <button onClick={addCar}>Add Car</button>
    </div>
  );
}
