import PropTypes from "prop-types";
import classes from "./loginForm.module.css";
import { Link } from "react-router-dom";
import TextualButton from "../textualButton/textualButton.jsx";

function LoginForm({ onSubmit }) {
  return (
    <form
      className={classes.form}
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(ev.target["0"].value, ev.target["1"].value);
      }}
    >
      <legend>Login</legend>
      <div className={classes.field}>
      <label className="small-text" htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Enter username" />
      </div>
      <div className={classes.field}>
        <label className="small-text" htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Enter password" />
      </div>
      <TextualButton text={"Login"} />
      <em>{"Don't"} have an account? <Link className="unstyled-link" to={"/register"}>Create Account</Link></em>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
