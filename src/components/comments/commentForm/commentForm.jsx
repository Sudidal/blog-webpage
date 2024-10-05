import PropTypes from "prop-types";
import classes from "./commentForm.module.css";
import TextualButton from "../../textualButton/textualButton.jsx";

function CommentForm({ postId, onSubmit, values = { content: "" } }) {
  return (
    <div className={classes.form}>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          onSubmit(ev.target["0"].value);
        }}
      >
        <div className={classes.row}>
          <input type="text" name="content" defaultValue={values.content} />
          <TextualButton text={"Post"} />
        </div>
      </form>
    </div>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.number,
  onSubmit: PropTypes.func,
  values: PropTypes.object,
};

export default CommentForm;
