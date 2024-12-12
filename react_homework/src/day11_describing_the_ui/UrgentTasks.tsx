export interface TaskType {
  id: number;
  name: string;
  priority: "normal" | "urgent";
}

// const exampleTasks: TaskType[] = [
//   { id: 1, name: "Take out the trash", priority: "normal" },
//   { id: 2, name: "Prepare project presentation", priority: "urgent" },
//   { id: 3, name: "Book flight tickets", priority: "urgent" },
//   { id: 4, name: "Water the plants", priority: "normal" },
//   { id: 5, name: "Complete React tutorial", priority: "urgent" },
// ];

export default function UrgentTasks({ tasks }: { tasks: TaskType[] }) {
  const urgentTasks = tasks.filter((task) => task.priority === "urgent");

  return (
    <div>
      <h1>Urgent Tasks</h1>
      {/* Only displays the urgent tasks */}
      <ul>
        {urgentTasks.map((task) => {
          return <li key={task.id}>{task.name}</li>;
        })}
      </ul>
    </div>
  );
}
