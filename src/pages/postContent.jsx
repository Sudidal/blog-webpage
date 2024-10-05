import blogApi from "../blogAPI.js";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { setMsgsContext } from "../contexts/mgsContext.jsx";
import CommentSection from "../components/comments/commentSection/commentSection.jsx";
import IconButtonWithCount from "../components/iconButtonWithCount/iconButtonWithCount.jsx";
import PrettyDate from "../components/prettyDate/prettyDate.jsx";

function PostContent() {
  const setErrMsgs = useContext(setMsgsContext)

  const [update, setUpdate] = useState(false);
  const [post, setPost] = useState(null);
  const params = useParams();

  useEffect(() => {
    blogApi.getPost(params.postId).then((res) => {
      setPost(res);
    });
  }, [params.postId, update]);

  function likeThePost() {
    blogApi.likePost(post.id).then((res) => {
      if (res === true) {
        updateComponent();
      }
      else {
        setErrMsgs(res.errors)
      }
    });
  }

  function updateComponent() {
    setUpdate(!update);
  }

  return (
    post && (
      <div>
        <h1>{post.title}</h1>
        <p className="small-text">Authored By: {post.author.username}</p>
        <br />
        <p className="small-text"><PrettyDate isoString={post.publishDate} /></p>
        <hr />
        <p className="big-text">{post.content}</p>
        <IconButtonWithCount
          iconSrc="/heart.svg"
          count={post.likes}
          onClick={likeThePost}
        />
        <CommentSection
          post={post}
          onCommentPost={updateComponent}
          onCommentLike={updateComponent}
          onCommentEdit={updateComponent}
          onCommentDelete={updateComponent}
        />
      </div>
    )
  );
}

export default PostContent;
