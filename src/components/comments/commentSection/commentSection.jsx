import blogApi from "../../../blogAPI.js";
import PropTypes from "prop-types";
import CommentsList from "../commentsList/commentsList.jsx";
import CommentForm from "../commentForm/commentForm.jsx";

function CommentSection({ post, onCommentPost, onCommentLike }) {
  function postComment(content) {
    blogApi.postNewComment(content, post.id).then((res) => {
      if (res === true) {
        onCommentPost();
      }
    });
  }
  function likeComment(commentId) {
    blogApi.likeComment(commentId).then(res => {
      if(res === true) {
        onCommentLike()
      }
    })
  }

  return (
    <div>
      <h3>Comments: {post.comments.length}</h3>
      <CommentForm postId={post.id} onSubmit={postComment} />
      <CommentsList comments={post.comments} onLike={likeComment} />
    </div>
  );
}

CommentSection.propTypes = {
  post: PropTypes.object,
  onCommentPost: PropTypes.func,
  onCommentLike: PropTypes.func,
};

export default CommentSection;
