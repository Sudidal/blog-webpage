import PropTypes from "prop-types";

function CommentForm({postId, onSubmit}) {
  return (
    <form onSubmit={(ev) => {
      ev.preventDefault();
      onSubmit(ev.target["0"].value)
    }}>
      <input type="text" name="content" />
      <button type="submit">Post</button>
    </form>
  )
}

CommentForm.propTypes = {
  postId: PropTypes.number,
  onSubmit: PropTypes.func
}

export default CommentForm