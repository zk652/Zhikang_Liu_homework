import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const Parent = () => {
  const [username, setUsername] = useState("PedroTech");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <div>
        {username}
        <Child />
        <Child2 />
      </div>
    </AppContext.Provider>
  );
};

export const Child = () => {
  return <Grandchild />;
};

export const Child2 = () => {
  const { username } = useContext(AppContext);
  return <h1>{username}</h1>;
};

export const Grandchild = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <button onClick={() => setUsername("PedroTechnologies")}>
        Change Username
      </button>
    </div>
  );
};
