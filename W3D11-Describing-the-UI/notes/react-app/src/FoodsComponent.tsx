import { ChangeEvent, useState } from "react";
export function FoodsComponent() {
  const [foods, setFoods] = useState<string[]>(["Apple", "Orange", "Banana"]);

  const [newFood, setNewFood] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewFood(e.target.value);
  };

  const handleAddFood = (): void => {
    setFoods((f) => [...f, newFood]);
    setNewFood("");
  };

  const handleRemoveFood = (index: number): void => {
    // _ in argument means ignored
    setFoods(foods.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input
        type="text"
        id="footInput"
        placeholder="Enter food name"
        value={newFood}
        onChange={handleInputChange}
      />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
