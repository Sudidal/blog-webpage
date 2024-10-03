import PropTypes from "prop-types";

function FileToInlineSvg({ path, style }) {
  let fileName = path.split(".")[0];
  if (fileName.startsWith("/")) {
    fileName = fileName.slice(1);
  }

  return (
    <div className="svg-icon">
      <svg id="svg" style={style}>
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
