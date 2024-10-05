import blogApi from "../blogAPI.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setMsgsContext } from "../contexts/mgsContext.jsx";
import LoginForm from "../components/loginForm/loginForm.jsx";

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
    <LoginForm onSubmit={onSubmit} />
  );
}

export default Login;
