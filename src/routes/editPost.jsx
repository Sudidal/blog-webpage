import blogApi from "../blogAPI.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostEditor from "../components/postEditor/postEditor.jsx";

function EditPost() {
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

  return (
    post &&
    <div>
      <h3>Editing an existing post</h3>
      <PostEditor values={values} onSubmit={blogApi.editPost} postId={post.id} />
    </div>
  )
}

export default EditPost