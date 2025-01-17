import { useMemo, useState } from "react";

const list = [
  {
    id: 1,
    name: "Christopher Wilson",
    birthday: "11/30/1984",
  },
  {
    id: 2,
    name: "Emily Williams",
    birthday: "06/05/1988",
  },
  {
    id: 3,
    name: "David Brown",
    birthday: "12/04/1997",
  },
  {
    id: 4,
    name: "Jessica Taylor",
    birthday: "02/08/1994",
  },
  {
    id: 5,
    name: "Jane Smith",
    birthday: "03/22/1985",
  },

  {
    id: 6,
    name: "John Doe",
    birthday: "01/15/1990",
  },
];

export default function BirthdayTable() {
  const [sortBy, setSortBy] = useState("default");

  const sortedList = useMemo(
    () =>
      [...list].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "age") {
          return (
            new Date(a.birthday).getTime() - new Date(b.birthday).getTime()
          );
        } else {
          return 0;
        }
      }),
    [sortBy]
  );

  return (
    <div>
      <label>
        <input
          type="radio"
          value="name"
          checked={sortBy === "name"}
          onChange={() => setSortBy("name")}
        />
        by name
      </label>
      <label>
        <input
          type="radio"
          value="age"
          checked={sortBy === "age"}
          onChange={() => setSortBy("age")}
        />
        by age
      </label>
      <label>
        <input
          type="radio"
          value="default"
          checked={sortBy === "default"}
          onChange={() => setSortBy("default")}
        />
        default
      </label>
      <table>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {sortedList.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.birthday}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
