import { useEffect, useRef } from "react";

export default function LoginForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <form>
      <input ref={inputRef} type="text" placeholder="Enter Username" />
      <button type="submit">Login</button>
    </form>
  );
}
