import useForceUpdate from "../customHooks/useForceUpdate";

function DemoForceUpdate() {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      <span>{Math.random()}</span>
      <button onClick={forceUpdate}>Force update</button>
    </div>
  );
}
export default DemoForceUpdate;
