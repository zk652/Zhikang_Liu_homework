export default function FunctionClick() {
  const clickHandler = (): void => {
    console.log("Clicked");
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}
