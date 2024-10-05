import PropTypes from "prop-types";
import classes from "./registerForm.module.css";
import { Link } from "react-router-dom";
import TextualButton from "../textualButton/textualButton.jsx";

function RegisterForm({ onSubmit }) {
  return (
    <form
      className={classes.form}
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
      <legend>Create New Account</legend>
      <div className={classes.field}>
        <label className="small-text" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
        />
      </div>
      <div className={classes.field}>
        <label className="small-text" htmlFor="email">
          Email
        </label>
        <input type="email" name="email" id="email" placeholder="Enter email" />
      </div>
      <div className={classes.field}>
        <label className="small-text" htmlFor="password">
          Password
        </label>
        <input type="password" name="password" id="password" placeholder="Enter password" />
      </div>
      <div className={classes.field}>
        <label className="small-text" htmlFor="confirm-password">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirm-password"
           id="confirm-password"
          placeholder="Re-Enter password"
        />
      </div>
      <TextualButton text={"Register"} />
      <em>
        Already have an account?{" "}
        <Link className="unstyled-link" to={"/login"}>
          Log In
        </Link>
      </em>
    </form>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default RegisterForm;
