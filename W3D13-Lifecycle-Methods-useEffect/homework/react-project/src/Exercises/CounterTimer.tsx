import { useEffect, useState } from "react";

export default function CounterTimer() {
  const [count, setCount] = useState<number>(0);
  const [counting, setCounting] = useState<boolean>(false);

  useEffect(() => {
    let interval: number | null = null;
    if (counting) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else if (!counting && count !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count, counting]);

  const handleStart = (): void => {
    setCounting(true);
  };

  const handlePause = (): void => {
    setCounting(false);
  };

  const handleReset = (): void => {
    setCounting(false);
    setCount(0);
  };

  return (
    <div>
      <button onClick={handleStart} disabled={counting}>
        Start
      </button>
      <button onClick={handlePause} disabled={!counting}>
        Pause
      </button>
      <button onClick={handleReset}>Reset</button>
      <p>{count}</p>
    </div>
  );
}
