import blogApi from "../blogAPI.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setMsgsContext } from "../contexts/mgsContext.jsx";

function Register() {
  const setErrMsgs = useContext(setMsgsContext)
  const navigate = useNavigate();

  function onSubmit(values) {
    blogApi.register(values).then((res) => {
      if (res === true) {
        navigate("/login");
      }
      else {
        setErrMsgs(res.errors)
      }
    });
  }

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit({
          username: ev.target["0"].value,
          email: ev.target["1"].value,
          password: ev.target["2"].value,
          confirm_password: ev.target["3"].value,
        });
      }}
    >
      <input type="text" name="username" placeholder="username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input
        type="password"
        name="confirm-password"
        placeholder="confirm-password"
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
