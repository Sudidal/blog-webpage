import blogApi from "../blogAPI.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setMsgsContext } from "../contexts/mgsContext.jsx";

function Login() {
  const setErrMsg = useContext(setMsgsContext)
  const navigate = useNavigate();

  function onSubmit(username, password) {
    blogApi.login(username, password).then((res) => {
      if (res === true) {
        navigate("/posts");
      }
      else {
        setErrMsg(res.errors)
      }
    });
  }

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(ev.target["0"].value, ev.target["1"].value);
      }}
    >
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
