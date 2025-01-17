import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <h1>React Router</h1>
      {/* a tag will rerender the page */}
      {/* <a></a> */}
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}
