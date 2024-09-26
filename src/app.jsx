import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import blogApi from "./blogAPI.js";
import { Link } from "react-router-dom";
import { userContext } from "./contexts/userContext.jsx";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    blogApi.getUserInfo().then((res) => {
      setUser(res);
    });
  }, [setUser]);

  return (
    <userContext.Provider value={user}>
      <div>
        <h1>Oxide Blog</h1>
        {user && <h5>Welcome, {user.username}</h5>}
        {(blogApi.isAdmin(user) || blogApi.isAuthor(user)) && (
          <Link to="posts/new">New Post</Link>
        )}
        <Outlet />
      </div>
    </userContext.Provider>
  );
}

export default App;
