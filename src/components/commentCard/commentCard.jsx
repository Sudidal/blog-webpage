import blogApi from "../../blogAPI.js";
import classes from "./commentCard.module.css";
import PropTypes from "prop-types";
import LikeButton from "../likeButton/likeButton.jsx";

function CommentCard({ comment }) {
  return (
    <div className={classes.commentCard}>
      <em>By: {comment.user.username}</em>
      <p>{comment.content}</p>
      <LikeButton onClick={() => {blogApi.likeComment(comment.id)}} count={comment.likes} />
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.object,
};

export default CommentCard;
