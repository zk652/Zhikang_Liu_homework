import useToggle from "../customHooks/useToggle";
function Demo() {
  const [color, toggleColor] = useToggle(["blue", "orange", "cyan", "teal"]);

  return (
    <button style={{ color: color }} onClick={toggleColor}>
      {color}
    </button>
  );
}

export default Demo;
