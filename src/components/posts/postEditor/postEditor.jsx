import PropTypes from "prop-types";
import classes from "./postEditor.module.css";
import PrettyCheckbox from "../../prettyCheckbox/prettyCheckbox.jsx";
import TextualButton from "../../textualButton/textualButton.jsx";

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
              title: ev.target["0"].value,
              content: ev.target["1"].value,
              publish: ev.target["2"].checked,
            },
            postId
          );
        }}
      >
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
        <div className={classes.field}>
          <p className="small-text">Publish post</p>
          <PrettyCheckbox name="publish" defaultVal={values.isPublished} />
        </div>
        <TextualButton text={"Create Post"} />
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
