import React, { useEffect } from "react";
import {
  useHistory,
  Link,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";
export default function Profile({ login }) {
  const history = useHistory();
  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [login, history]);

  const { path, url } = useRouteMatch();
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>
          <Link to={`${url}/viewprofile`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/viewprofile`}>
          <ViewProfile />
        </Route>
        <Route path={`${path}/editprofile`}>
          <EditProfile />
        </Route>
      </Switch>
    </div>
  );
}
