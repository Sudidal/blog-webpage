import classes from "./commentCard.module.css";
import PropTypes from "prop-types";

function CommentCard({ comment }) {
  return (
    <div className={classes.commentCard}>
      <em>By: {comment.user.username}</em>
      <p>{comment.content}</p>
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.object,
};

export default CommentCard;
