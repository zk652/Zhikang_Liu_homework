import { useState, useCallback } from "react";

function useForceUpdate() {
  const [, setTick] = useState(0); // state not directly used

  const update = useCallback(() => {
    setTick((tick) => tick + 1); // increment the state to force re-render
  }, []);

  return update;
}

export default useForceUpdate;
