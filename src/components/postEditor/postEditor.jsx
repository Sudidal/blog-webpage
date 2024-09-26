import PropTypes from "prop-types";

function PostEditor({
  values = { title: "", content: "", isPublished: "" },
  postId,
  onSubmit,
}) {
  return (
    <div>
      <form
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
        <input
          type="checkbox"
          name="publish"
          defaultChecked={values.isPublished}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={values.title}
        />
        <textarea
          name="content"
          placeholder="content"
          defaultValue={values.content}
        ></textarea>
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
