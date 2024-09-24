import blogApi from "../../../blogAPI.js"
import PropTypes from "prop-types";

function CommentForm({postId}) {
  return (
    <form onSubmit={(ev) => {
      ev.preventDefault();
      blogApi.postComment(ev.target["0"].value, postId)
    }}>
      <input type="text" name="content" />
      <button type="submit">Post</button>
    </form>
  )
}

CommentForm.propTypes = {
  postId: PropTypes.number
}

export default CommentForm