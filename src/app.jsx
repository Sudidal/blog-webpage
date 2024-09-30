import blogApi from "./blogAPI.js";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { userContext } from "./contexts/userContext.jsx";
import { setMsgsContext } from "./contexts/mgsContext.jsx";
import MessagesContainer from "./components/messgesContainer/messgesContainer.jsx";
import Header from "./components/layout/header/header.jsx";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    blogApi.getUserInfo().then((res) => {
      if (res === true) {
        setUser(res);
      }
    });
  }, [setUser]);

  function logout() {
    blogApi.logout().then((res) => {
      if (res === true) {
        navigate("/");
      }
    });
  }

  function addMsgs(input) {
    console.log("adding");
    if (!Array.isArray(input)) {
      input = [input];
    }
    setMsgs(msgs.concat(input));
    console.log(msgs);
  }

  function removeMsg(input) {
    const i = msgs.indexOf(input);
    const temp = Array.from(msgs);
    temp.splice(i, 1);
    console.log(temp)
    setMsgs(temp);
    // setMsgs(temp => temp.splice(i, 1));
  }

  return (
    <userContext.Provider value={user}>
      <setMsgsContext.Provider value={addMsgs}>
        <div>
          <Header logout={logout} />
          <main className="content">
            <MessagesContainer messages={msgs} onMsgRemove={removeMsg} />
            <Outlet />
          </main>
        </div>
      </setMsgsContext.Provider>
    </userContext.Provider>
  );
}

export default App;
