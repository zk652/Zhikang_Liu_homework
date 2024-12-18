import { useEffect, useState } from "react";

export default function Text() {
  const [resourceType, setResourceType] = useState<string>("posts");
  const [items, setItems] = useState([]);

  // only trigger once on mount
  // useEffect(() => {
  //   console.log("onMount");
  // }, []);

  // triggers whenever resourceType changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
    console.log("resource changed");

    // cleanup function, runs first when the useEffect is triggered
    return () => {
      console.log("return from resource changes");
    };
  }, [resourceType]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <p>{windowWidth}</p>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments ")}>Comments</button>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}
