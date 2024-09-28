import blogApi from "../blogAPI.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function onSubmit(username, password) {
    blogApi.login(username, password).then((res) => {
      if (res === true) {
        navigate("/posts");
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
