import PropTypes from "prop-types";
import classes from "./likeButton.module.css"

function LikeButton({ count, onClick }) {
  return (
    <div className={classes.likeBtn}>
      <p>{count}</p>
      <button onClick={onClick}>Like</button>
    </div>
  );
}

LikeButton.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
};

export default LikeButton;
