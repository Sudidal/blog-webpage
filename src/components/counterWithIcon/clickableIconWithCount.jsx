import PropTypes from "prop-types";
import classes from "./clickableIconWithCount.module.css";

function ClickableIconWithCount({ count, iconSrc, onClick }) {
  const iconStyle = { width: "20px" };

  return (
    <div className={classes.container}>
      {count && <p className={classes.count}>{count}</p>}
      {onClick ? (
        <button
          className={classes.btn}
          onClick={(ev) => {
            ev.stopPropagation();
            onClick();
          }}
        >
          <img className={classes.icon} src={iconSrc} style={iconStyle} />
        </button>
      ) : (
        <img className={classes.icon} src={iconSrc} style={iconStyle} />
      )}
    </div>
  );
}

ClickableIconWithCount.propTypes = {
  count: PropTypes.number,
  iconSrc: PropTypes.string,
  onClick: PropTypes.func,
};

export default ClickableIconWithCount;
