import blogApi from "../../../blogAPI.js";
import { useContext } from "react";
import { userContext } from "../../../contexts/userContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import ThemeSwitch from "../../themeSwitch/themeSwitch.jsx";
import IconButton from "../../iconButton/iconButton.jsx";
import { updateContext } from "../../../contexts/updateContext.jsx";

function Header() {
  const user = useContext(userContext);
  const updateApp = useContext(updateContext);
  const navigate = useNavigate()

  function logout() {
    blogApi.logout().then((res) => {
      if (res === true) {
        updateApp()
        navigate("/");
      }
    });
  }

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
          {user && <IconButton iconSrc={"/logout.svg"} onClick={logout} />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
