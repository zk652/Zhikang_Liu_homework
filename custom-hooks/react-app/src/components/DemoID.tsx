import useId from "../customHooks/useId";

function Input({ id }: { id?: string }) {
  const uuid = useId(id);

  return (
    <>
      <label htmlFor={uuid}>Input label</label>
      <input type="text" id={uuid} />
    </>
  );
}

const DemoID = () => {
  // Example usage with and without passing an ID
  return (
    <div>
      <Input id="my-id" /> {/*input and label will have id 'my-id'*/}
      <Input /> {/*input and label will have a randomly generated id*/}
    </div>
  );
};

export default DemoID;
