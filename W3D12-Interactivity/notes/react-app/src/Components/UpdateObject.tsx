import { ChangeEvent, useState } from "react";

interface Car {
  year: number;
  make: string;
  model: string;
}

export default function Car() {
  const [car, setCar] = useState<Car>({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  const handlerYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar((c) => ({ ...c, year: parseInt(e.target.value) }));
  };
  const handlerMakeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };
  const handlerModelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <div>
      <br />
      <input type="number" value={car.year} onChange={handlerYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handlerMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handlerModelChange} />
      <br />
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
    </div>
  );
}
