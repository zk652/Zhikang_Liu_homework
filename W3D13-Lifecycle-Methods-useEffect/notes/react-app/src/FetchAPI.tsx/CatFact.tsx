import axios from "axios";
import { useEffect, useState } from "react";

export default function CatFact() {
  const [catFact, setCatFact] = useState("");
  useEffect(() => {
    fetchCatFact();
  }, []);

  const fetchCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  return (
    <div>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}
