import blogApi from "./blogAPI.js";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { userContext } from "./contexts/userContext.jsx";
import { setMsgsContext } from "./contexts/mgsContext.jsx";
import MessagesContainer from "./components/messgesContainer/messgesContainer.jsx";
import Header from "./components/layout/header/header.jsx";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [msgs, setMsgs] = useState([]);
  const curMsgs = useRef();

  curMsgs.current = Array.from(msgs);

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
    setMsgs(msgs.concat(input));
  }

  const removeMsg = useCallback((input) => {
    const i = curMsgs.current.indexOf(input);
    if(i < 0) return
    curMsgs.current.splice(i, 1);
    setMsgs(curMsgs.current);
  }, [])

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
