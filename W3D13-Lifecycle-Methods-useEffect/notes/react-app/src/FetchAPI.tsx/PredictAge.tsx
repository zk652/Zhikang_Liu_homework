import axios from "axios";
import { useState } from "react";

export default function PredictAge() {
  const [name, setName] = useState<string>("");
  const [predictedAge, setPredictedAge] = useState<number>(0);

  const fetchData = (): void => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data.age);
    });
  };
  return (
    <div>
      <input
        placeholder="Ex. Pedro"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Age: {predictedAge}</h1>
    </div>
  );
}
