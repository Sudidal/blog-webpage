import PropTypes from "prop-types";
import ClickableIconWithCount from "../counterWithIcon/clickableIconWithCount.jsx";

function IconWithCount({iconSrc, count}) {
  return (
    <ClickableIconWithCount iconSrc={iconSrc} count={count} />
  )
}

export default IconWithCount

IconWithCount.propTypes = {
  iconSrc: PropTypes.string,
  count: PropTypes.number
}