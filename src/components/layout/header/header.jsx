import PropTypes from "prop-types";
import { useContext } from "react";
import { userContext } from "../../../contexts/userContext.jsx";
import { Link } from "react-router-dom";
import classes from "./header.module.css";
import ThemeSwitch from "../../themeSwitch/themeSwitch.jsx";

function Header({logout}) {
  const user = useContext(userContext);

  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.left}>
          <h1>
            <Link to="/" className="unstyled-link">Oxide Blog</Link>
          </h1>
          {user && <em>Welcome, {user.username}</em>}
        </div>
        <div className={classes.right}>
          <ThemeSwitch />
          <button onClick={logout}>Log Out</button>
          <Link to={"/posts/new"} className="button-link">
            +
          </Link>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes ={
  logout: PropTypes.func
}

export default Header;
