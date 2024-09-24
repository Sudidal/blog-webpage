import classes from "./commentCard.module.css";
import PropTypes from "prop-types";

function CommentCard({ comment }) {
  return (
    <div className={classes.commentCard}>
      <p>By: {comment.user.username}</p>
      <p>{comment.content}</p>
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.object,
};

export default CommentCard;
