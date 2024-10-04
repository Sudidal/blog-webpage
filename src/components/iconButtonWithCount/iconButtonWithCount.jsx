import PropTypes from "prop-types"
import ClickableIconWithCount from "../clickableIconWithCount/clickableIconWithCount.jsx"

function IconButtonWithCount({iconSrc, count, onClick}) {
  return (
    <ClickableIconWithCount iconSrc={iconSrc} count={count} onClick={onClick} />
  )
}

IconButtonWithCount.propTypes = {
  iconSrc: PropTypes.string,
  count: PropTypes.number,
  onClick: PropTypes.func
}

export default IconButtonWithCount