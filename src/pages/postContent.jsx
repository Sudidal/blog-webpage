import blogApi from "../blogAPI.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentSection from "../components/comments/commentSection/commentSection.jsx";
import IconButtonWithCount from "../components/iconButtonWithCount/iconButtonWithCount.jsx";

function PostContent() {
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
    });
  }

  function updateComponent() {
    setUpdate(!update);
  }

  return (
    post && (
      <div>
        <p>{post.content}</p>
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
