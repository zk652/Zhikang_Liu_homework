// select all form

import { useState } from "react";

interface Item {
  id: number;
  name: string;
  isSelected: boolean;
}

export default function SelectAllForm() {
  const [selectedItems, setSelectedItems] = useState<Item[]>([
    { id: 1, name: "item1", isSelected: false },
    { id: 2, name: "item2", isSelected: false },
    { id: 3, name: "item3", isSelected: false },
  ]);

  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newItems = selectedItems.map((item) => {
      return { ...item, isSelected: newSelectAll };
    });
    setSelectedItems(newItems);
  };

  const handleSelectItem = (id: number) => {
    const selectedItem = selectedItems.find((item) => item.id === id);
    const newItems = selectedItems.map((item) => {
      return item.id === id
        ? { ...item, isSelected: !selectedItem!.isSelected }
        : item;
    });
    setSelectedItems(newItems);

    if (newItems.every((item) => item.isSelected)) setSelectAll(true);
    else setSelectAll(false);
  };

  return (
    <div>
      <h2>All the selected Items:</h2>
      <p>
        {selectedItems
          .filter((item) => item.isSelected)
          .map((item) => item.name)
          .join(", ")}
      </p>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          SelectAll
        </label>
        <div>
          {selectedItems.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  checked={item.isSelected}
                  onChange={() => handleSelectItem(item.id)}
                />{" "}
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
