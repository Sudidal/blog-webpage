import CommentCard from "../commentCard/commentCard.jsx";
import PropTypes from "prop-types";

function CommentsList({ comments }) {
  return (
    <div>
      {comments.map((comment) => {
        return <CommentCard key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentsList;
