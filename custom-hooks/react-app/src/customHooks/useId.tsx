import { useState } from "react";

// A function to generate a random ID
function generateId(prefix: string = "id"): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

function useId(passedId?: string): string {
  // State initialization only happens once,
  // If `passedId` is provided, use it; otherwise, generate a new one.
  const [id] = useState(passedId || generateId());

  return id;
}

export default useId;
