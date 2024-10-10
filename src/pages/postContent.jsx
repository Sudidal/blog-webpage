import blogApi from "../blogAPI.js";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { setMsgsContext } from "../contexts/mgsContext.jsx";
import { toSafeHtml } from "../../utils/toSafeHtml.js";
import CommentSection from "../components/comments/commentSection/commentSection.jsx";
import IconButtonWithCount from "../components/iconButtonWithCount/iconButtonWithCount.jsx";
import PrettyDate from "../components/prettyDate/prettyDate.jsx";
import LoadingDisplay from "../components/loadingDisplay/loadingDisplay.jsx";

function PostContent() {
  const setErrMsgs = useContext(setMsgsContext);

  const [update, setUpdate] = useState(false);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();

  const safeContent = toSafeHtml(post?.content)

  useEffect(() => {
    setLoading(true);
    blogApi.getPost(params.postId).then((res) => {
      setLoading(false);
      if (res) {
        setPost(res);
      } else {
        setError(true);
      }
    });
  }, [params.postId, update]);

  function likeThePost() {
    blogApi.likePost(post.id).then((res) => {
      if (res === true) {
        updateComponent();
      } else {
        setErrMsgs(res.errors);
      }
    });
  }

  function updateComponent() {
    setUpdate(!update);
  }

  if (loading) {
    return <LoadingDisplay />;
  } else if (error) {
    return <p>An Error has occured</p>;
  } else if (post) {
    return (
      post && (
        <div>
          <h1>{post.title}</h1>
          <p className="small-text">Authored By: {post.author.username}</p>
          <br />
          <p className="small-text">
            <PrettyDate isoString={post.publishDate} />
          </p>
          <hr />
          <p className="big-text" dangerouslySetInnerHTML={{__html: safeContent}}></p>
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
  } else {
    <p>Nothing to show here</p>;
  }
}

export default PostContent;
