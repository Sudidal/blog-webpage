import CommentCard from "../commentCard/commentCard.jsx";
import PropTypes from "prop-types";
import classes from "./commentsList.module.css"

function CommentsList({ comments, onLike, onEdit, onDelete }) {
  return (
    <div className={classes.commentsList}>
      {comments.map((comment) => {
        return <CommentCard key={comment.id} comment={comment} onLike={onLike} onDelete={onDelete} onEdit={onEdit} />;
      })}
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  onLike: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default CommentsList;
