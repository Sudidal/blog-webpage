import classes from "./commentCard.module.css";
import PropTypes from "prop-types";
import IconButtonWithCount from "../../iconButtonWithCount/iconButtonWithCount.jsx";

function CommentCard({ comment, onLike }) {
  return (
    <div className={classes.commentCard}>
      <em>By: {comment.user.username}</em>
      <p>{comment.content}</p>
      <IconButtonWithCount
        iconSrc={"/heart.svg"}
        count={comment.likes}
        onClick={() => {
          onLike(comment.id);
        }}
      />
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.object,
  onLike: PropTypes.func,
};

export default CommentCard;
