import blogApi from "../blogAPI.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setMsgsContext } from "../contexts/mgsContext.jsx";
import RegisterForm from "../components/registerForm/registerForm.jsx";

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
    <>
    <RegisterForm onSubmit={onSubmit} />
    </>
  );
}

export default Register;
