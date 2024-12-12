import { useState } from "react";

export function UnclickableButton() {
  const [hover, setHover] = useState<boolean>(false);

  const onHover = (): void => {
    setHover(!hover);
  };

  return (
    <button onMouseEnter={onHover} onMouseLeave={onHover} disabled={hover}>
      Unclickable
    </button>
  );
}
