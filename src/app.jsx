import blogApi from "./blogAPI.js";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { userContext } from "./contexts/userContext.jsx";
import Header from "./components/layout/header/header.jsx";

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);

  useEffect(() => {
    blogApi.getUserInfo().then((res) => {
      if (res === true) {
        setUser(res);
      }
    });
  }, [setUser]);

  function logout() {
    blogApi.logout().then(res => {
      if(res === true) {
        navigate("/")
      }
    })
  }

  return (
    <userContext.Provider value={user}>
      <div>
        <Header logout={logout} />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </userContext.Provider>
  );
}

export default App;
