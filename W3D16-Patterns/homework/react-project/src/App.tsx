import "./App.css";
import LoginForm from "./Tasks/LoginForm";
import useFetch from "./Tasks/useFetch";

function App() {
  const { data, isLoading, isError } = useFetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data.</div>;

  return (
    <>
      <LoginForm />
      {data && (
        <div>
          <h1>User 1</h1>
          <p>Name: {data.name}</p>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </>
  );
}

export default App;
