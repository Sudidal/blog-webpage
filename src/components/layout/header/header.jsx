import PropTypes from "prop-types";
import { useContext } from "react";
import { userContext } from "../../../contexts/userContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import ThemeSwitch from "../../themeSwitch/themeSwitch.jsx";
import IconButton from "../../iconButton/iconButton.jsx";

function Header({ logout }) {
  const user = useContext(userContext);
  const navigate = useNavigate()

  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.left}>
          <h1>
            <Link to="/" className="unstyled-link">
              Oxide Blog
            </Link>
          </h1>
          {user && <em>Welcome, {user.username}</em>}
        </div>
        <div className={classes.right}>
          <IconButton iconSrc={"/write.svg"} onClick={() => {navigate("/posts/new")}} />
          <ThemeSwitch />
          <IconButton iconSrc={"/logout.svg"} onClick={logout} />
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  logout: PropTypes.func,
};

export default Header;
