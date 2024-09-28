import blogApi from "../blogAPI.js";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  function onSubmit(values) {
    blogApi.register(values).then((res) => {
      if (res === true) {
        navigate("/login");
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
