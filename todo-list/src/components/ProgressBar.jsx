export default function ProgressBar({ completedTasks, totalTasks }) {
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div
      style={{
        width: "200px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "#90ee90", // Light green
          textAlign: "center",
          color: "#555",
          padding: "5px 0",
          transition: "width 0.3s ease-in-out",
        }}
      >
        {`${completedTasks} of ${totalTasks} tasks done`}
      </div>
    </div>
  );
}
