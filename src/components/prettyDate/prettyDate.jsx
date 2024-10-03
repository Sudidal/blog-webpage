import PropTypes from "prop-types"

function PrettyDate({isoString}) {
  const date = new Date(isoString)
  const formatted = date.toLocaleDateString() + " " + date.toLocaleTimeString()

  return (
    <em>{formatted}</em>
  )
}

PrettyDate.propTypes = {
  isoString: PropTypes.string
}

export default PrettyDate