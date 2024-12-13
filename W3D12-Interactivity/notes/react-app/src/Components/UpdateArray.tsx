import { useState } from "react";

export default function ArrayComponent() {
  const [foods, setFoods] = useState<string[]>(["Apple", "Orange", "Banana"]);

  const [newFood, setNewFood] = useState<string>("");

  const addFood = () => {
    setFoods((f) => [...f, newFood]);
    setNewFood("");
  };

  const removeFood = (index: number) => {
    setFoods((f) => f.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => {
          return (
            <li key={index}>
              {food}
              <button onClick={() => removeFood(index)}>X</button>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        value={newFood}
        onChange={(e) => setNewFood(e.target.value)}
        placeholder="Enter food name"
      />
      <button onClick={addFood}>Add Food</button>
    </div>
  );
}
