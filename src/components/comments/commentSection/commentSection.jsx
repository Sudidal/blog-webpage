import blogApi from "../../../blogAPI.js";
import PropTypes from "prop-types";
import { useContext } from "react";
import { setMsgsContext } from "../../../contexts/mgsContext.jsx";
import CommentsList from "../commentsList/commentsList.jsx";
import CommentForm from "../commentForm/commentForm.jsx";

function CommentSection({ post, onCommentPost, onCommentLike, onCommentEdit, onCommentDelete }) {
  const setErrMsgs = useContext(setMsgsContext)
  
  function postComment(content) {
    blogApi.postNewComment(content, post.id).then((res) => {
      if (res === true) {
        onCommentPost();
      }
      else {
        setErrMsgs(res.errors)
      }
    });
  }
  function likeComment(commentId) {
    blogApi.likeComment(commentId).then(res => {
      if(res === true) {
        onCommentLike()
      }
      else {
        setErrMsgs(res.errors)
      }
    })
  }
  function editComment(content, commentId) {
    blogApi.editComment(content, commentId).then(res => {
      if(res === true) {
        onCommentEdit()
      }
      else {
        setErrMsgs(res.errors)
      }
    })
  }
  function deleteComment(commentId) {
    blogApi.deleteComment(commentId).then(res => {
      if(res === true) {
        onCommentDelete()
      }
      else {
        setErrMsgs(res.errors)
      }
    })
  }

  return (
    <div>
      <h3>Comments: {post.comments.length}</h3>
      <CommentForm postId={post.id} onSubmit={postComment} />
      <CommentsList comments={post.comments} onLike={likeComment} onDelete={deleteComment} onEdit={editComment} />
    </div>
  );
}

CommentSection.propTypes = {
  post: PropTypes.object,
  onCommentPost: PropTypes.func,
  onCommentLike: PropTypes.func,
  onCommentEdit: PropTypes.func,
  onCommentDelete: PropTypes.func,
};

export default CommentSection;
