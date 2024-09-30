import blogApi from "../blogAPI.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { setMsgsContext } from "../contexts/mgsContext.jsx";
import PostEditor from "../components/posts/postEditor/postEditor.jsx";

function NewPost() {
  const setErrMsgs = useContext(setMsgsContext)
  const navigate = useNavigate()

  function onSubmit(values) {
    blogApi.postNewPost(values).then(res => {
      if(res === true) {
        navigate("/posts")
      }
      else {
        setErrMsgs(res.errors)
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