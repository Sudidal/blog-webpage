import PropTypes from "prop-types";

function TextualButton({text, onClick}) {
  return (
    <button className="textual-btn" onClick={onClick}>{text}</button>
  )
}

TextualButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default TextualButton