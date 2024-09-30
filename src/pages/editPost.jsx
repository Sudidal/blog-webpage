import blogApi from "../blogAPI.js";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { setMsgsContext } from "../contexts/mgsContext.jsx";
import PostEditor from "../components/posts/postEditor/postEditor.jsx";

function EditPost() {
  const setErrMsgs = useContext(setMsgsContext)
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [values, setValues] = useState(null)
  const postId = useParams().postId

  useEffect(() => {
    blogApi.getPost(postId).then(res => {
      setPost(res)
      setValues({
        title: res.title,
        content: res.content,
        isPublished: res.isPublished,
      })
    })
  }, [postId])

  function onSubmit(values) {
    blogApi.editPost(values, post.id).then(res => {
      if(res === true) {
        navigate("/posts")
      }
      else {
        setErrMsgs(res.errors)
      }
    })
  }

  return (
    post &&
    <div>
      <h3>Editing an existing post</h3>
      <PostEditor values={values} onSubmit={onSubmit} postId={post.id} />
    </div>
  )
}

export default EditPost