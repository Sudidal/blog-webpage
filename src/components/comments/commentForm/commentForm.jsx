import PropTypes from "prop-types";
import TextualButton from "../../textualButton/textualButton.jsx";

function CommentForm({ postId, onSubmit, values = {content: ""} }) {
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(ev.target["0"].value);
      }}
    >
      <input type="text" name="content" defaultValue={values.content} />
      <TextualButton text={"Post"} />
    </form>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.number,
  onSubmit: PropTypes.func,
  values: PropTypes.object,
};

export default CommentForm;
