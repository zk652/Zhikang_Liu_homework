interface UsersProps {
  name: string;
  age: number;
}
export const Users: React.FC<UsersProps> = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};
