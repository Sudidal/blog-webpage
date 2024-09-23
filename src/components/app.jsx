import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import blogApi from "../../blogAPI.js";

function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    blogApi.getUserInfo().then(res => {
      setUser(res)
    })
  }, [setUser])

  return (
    user &&
    <div>
      <h1>Oxide Blog</h1>
      <h5>Welcome, {user.username}</h5>
      <Outlet />
    </div>
  );
}

export default App;
