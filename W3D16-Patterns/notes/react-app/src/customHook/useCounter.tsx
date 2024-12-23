import { useState } from "react";

export default function useCounter() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((prev) => prev + 1);
  };
  const decrease = () => {
    setCounter((prev) => prev - 1);
  };

  const restart = () => {
    setCounter(0);
  };

  return [counter, increase, decrease, restart];
}
