import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import blogApi from "./blogAPI.js";
import { userContext } from "./contexts/userContext.jsx";
import Header from "./components/header/header.jsx";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    blogApi.getUserInfo().then((res) => {
      if (res === true) {
        setUser(res);
      }
    });
  }, [setUser]);

  return (
    <userContext.Provider value={user}>
      <div>
        <Header />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </userContext.Provider>
  );
}

export default App;
