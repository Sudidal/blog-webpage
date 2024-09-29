import blogApi from "../blogAPI.js";
import { useNavigate } from "react-router-dom";
import PostEditor from "../components/posts/postEditor/postEditor.jsx";

function NewPost() {
  const navigate = useNavigate()

  function onSubmit(values) {
    blogApi.postNewPost(values).then(res => {
      if(res === true) {
        navigate("/posts")
      }
    })
  }
  
  return (
    <div>
      <h3>Making a new post</h3>
      <PostEditor onSubmit={onSubmit} />
    </div>
  )
}

export default NewPost