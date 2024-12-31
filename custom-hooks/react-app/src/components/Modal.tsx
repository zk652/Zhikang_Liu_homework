import useDisclosure from "../customHooks/useDisclosure";

const Modal = () => {
  const { isOpen, open, close } = useDisclosure();

  return (
    <div>
      <button onClick={open}>Open Modal</button>
      {isOpen && (
        <div>
          <p>This is a modal!</p>
          <button onClick={close}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
