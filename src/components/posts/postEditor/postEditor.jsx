import PropTypes from "prop-types";
import storageManager from "../../../storageManager.js";
import classes from "./postEditor.module.css";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import PrettyCheckbox from "../../prettyCheckbox/prettyCheckbox.jsx";
import TextualButton from "../../textualButton/textualButton.jsx";

function PostEditor({
  values = { title: "", content: "", isPublished: "" },
  postId,
  onSubmit,
}) {
  const editorRef = useRef();
  const isDarkTheme = storageManager.getItem("dark");

  return (
    <div>
      <form
        className={classes.form}
        onSubmit={(ev) => {
          ev.preventDefault();
          onSubmit(
            {
              title: ev.target["0"].value,
              content: editorRef.current.getContent(),
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
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_KEY}
            onInit={(_evt, editor) => (editorRef.current = editor)}
            initialValue={values.content}
            init={{
              skin_url: isDarkTheme
                ? "/tinyMCE/skins/ui/dark"
                : "/tinyMCE/skins/ui/default",
              content_css: isDarkTheme
                ? "http://localhost:5173/tinyMCE/skins/content/dark/content.min.css"
                : "http://localhost:5173/tinyMCE/skins/content/default/content.min.css",
              min_height: 400,
              width: 600,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
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
