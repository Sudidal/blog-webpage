import PropTypes from "prop-types"
import ClickableIconWithCount from "../clickableIconWithCount/clickableIconWithCount.jsx"

function IconButton({iconSrc, onClick}) {
  return (
    <ClickableIconWithCount iconSrc={iconSrc} onClick={onClick} />
  )
}

IconButton.propTypes = {
  iconSrc: PropTypes.string,
  onClick: PropTypes.func
}

export default IconButton