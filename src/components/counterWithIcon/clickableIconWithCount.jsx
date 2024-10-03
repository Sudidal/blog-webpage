import PropTypes from "prop-types";
import classes from "./clickableIconWithCount.module.css";
import FileToInlineSvg from "../fileToInlineSvg/fileToInlineSvg.jsx";

function ClickableIconWithCount({ count, iconSrc, onClick }) {
  const iconStyle = { width: "20px", height: "20px" };

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
          <FileToInlineSvg path={iconSrc} style={iconStyle} />
        </button>
      ) : (
        <FileToInlineSvg path={iconSrc} style={iconStyle} />
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
