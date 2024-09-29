import PropTypes from "prop-types";

function CommentForm({ postId, onSubmit, values = {content: ""} }) {
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(ev.target["0"].value);
      }}
    >
      <input type="text" name="content" defaultValue={values.content} />
      <button type="submit">Post</button>
    </form>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.number,
  onSubmit: PropTypes.func,
  values: PropTypes.object,
};

export default CommentForm;
