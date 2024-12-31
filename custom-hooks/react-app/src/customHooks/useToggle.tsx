import { useState, useCallback } from "react";

type UseToggle<T> = [T, () => void];

function useToggle<T>(values: T[]): UseToggle<T> {
  const [index, setIndex] = useState(0);

  const toggle = useCallback(() => {
    // Update the index state to the next item in the array
    // Cycles back to the first item after reaching the last item
    setIndex((prevIndex) => (prevIndex + 1) % values.length);
  }, [values.length]);

  // Return the current item and the toggle function
  return [values[index], toggle];
}

export default useToggle;
