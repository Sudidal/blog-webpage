import PropTypes from "prop-types";
import classes from "./clickableArea.module.css"

function ClickableArea({ onClick, children }) {
  
  return <div className={classes.clickable} onClick={onClick}>{children}</div>;
}

ClickableArea.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ClickableArea;
