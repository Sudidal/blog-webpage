import PropTypes from "prop-types";
import classes from "./postEditor.module.css";

function PostEditor({
  values = { title: "", content: "", isPublished: "" },
  postId,
  onSubmit,
}) {
  return (
    <div>
      <form
        className={classes.form}
        onSubmit={(ev) => {
          ev.preventDefault();
          onSubmit(
            {
              title: ev.target["1"].value,
              content: ev.target["2"].value,
              publish: ev.target["0"].checked,
            },
            postId
          );
        }}
      >
        <div className={classes.field}>
          <input
            type="checkbox"
            name="publish"
            defaultChecked={values.isPublished}
          />
        </div>
        <div className={classes.field}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={values.title}
          />
        </div>
        <div className={classes.field}>
          <textarea
            name="content"
            placeholder="content"
            defaultValue={values.content}
          ></textarea>
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

PostEditor.propTypes = {
  values: PropTypes.object,
  postId: PropTypes.number,
  onSubmit: PropTypes.func,
};

export default PostEditor;
