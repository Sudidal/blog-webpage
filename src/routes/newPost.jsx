import blogApi from "../blogAPI.js";
import PostEditor from "../components/postEditor/postEditor.jsx";

function NewPost() {
  return (
    <div>
      <h3>Making a new post</h3>
      <PostEditor onSubmit={blogApi.postNewPost} />
    </div>
  )
}

export default NewPost