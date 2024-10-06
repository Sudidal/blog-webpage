import PropTypes from "prop-types";
import classes from "./fileToInlineSvg.module.css"

function FileToInlineSvg({ path, style }) {
  let fileName = path.split(".")[0];
  if (fileName.startsWith("/")) {
    fileName = fileName.slice(1);
  }

  return (
    <div className={classes.svg} style={style}>
      <svg id="svg">
        <use href={`${path}#${fileName}`}></use>
      </svg>
    </div>
  );
}

FileToInlineSvg.propTypes = {
  path: PropTypes.string,
  style: PropTypes.object,
};

export default FileToInlineSvg;
