import { ChangeEvent, useState } from "react";

export default function ControlledComponents() {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const [selectedGender, setSelectedGender] = useState<string>("");

  const radioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState<string>("");

  const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={checkboxChange}
          />
          Label
        </label>
      </div>

      <div>
        <p>Gender</p>
        <label>
          <input
            type="radio"
            value="female"
            checked={selectedGender === "female"}
            onChange={radioChange}
          />{" "}
          Female
        </label>
        <label>
          <input
            type="radio"
            value="male"
            checked={selectedGender === "male"}
            onChange={radioChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            value="other"
            checked={selectedGender === "other"}
            onChange={radioChange}
          />{" "}
          Other
        </label>
      </div>

      <select value={selectedOption} onChange={selectChange}>
        <option value="ten">Ten</option>
        <option value="twenty">Twenty</option>
        <option value="thirty">Thirty</option>
      </select>
    </div>
  );
}
