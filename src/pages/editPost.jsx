import blogApi from "../blogAPI.js";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { setMsgsContext } from "../contexts/mgsContext.jsx";
import PostEditor from "../components/posts/postEditor/postEditor.jsx";
import LoadingDisplay from "../components/loadingDisplay/loadingDisplay.jsx";

function EditPost() {
  const setErrMsgs = useContext(setMsgsContext);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [values, setValues] = useState(null);
  const postId = useParams().postId;

  useEffect(() => {
    setLoading(true);
    blogApi.getPost(postId).then((res) => {
      setLoading(false)
      if(res) {
        setPost(res);
        setValues({
          title: res.title,
          content: res.content,
          isPublished: res.isPublished,
        });
      }
      else {
        setError(true)
      }
    });
  }, [postId]);

  function onSubmit(values) {
    blogApi.editPost(values, post.id).then((res) => {
      if (res === true) {
        navigate("/posts");
      } else {
        setErrMsgs(res.errors);
      }
    });
  }

  if (loading) {
    return <LoadingDisplay />;
  } else if (error) {
    return <p>An error has occured</p>;
  } else if (post) {
    return (
      post && (
        <div>
          <h3>Editing Post</h3>
          <PostEditor values={values} onSubmit={onSubmit} postId={post.id} />
        </div>
      )
    );
  }
  else {
    return <p>Nothing to show here</p>
  }
}

export default EditPost;
