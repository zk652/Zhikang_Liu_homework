import { useParams, useLocation } from "react-router-dom";
export default function Post() {
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search);
  return (
    <div>
      <h2>ID is = {id}</h2>
      <h2>{query.get("first")}</h2>
      <h2>{query.get("last")}</h2>
    </div>
  );
}
