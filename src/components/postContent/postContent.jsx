import blogApi from "../../blogAPI.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentsList from "../commentsList/commentsList.jsx";
import CommentForm from "../commentForm/commentForm.jsx";
import LikeButton from "../likeButton/likeButton.jsx";

function PostContent() {
  const [post, setPost] = useState(null);

  const params = useParams();

  useEffect(() => {
    blogApi.getPost(params.postId).then((res) => {
      setPost(res);
    });
  }, [params.postId]);

  return (
    post && (
      <div>
        <p>{post.content}</p>
        <LikeButton count={post.likes} onClick={() => blogApi.likePost(post.id)} />
        <h3>Comments</h3>
        <CommentForm postId={post.id} />
        <CommentsList comments={post.comments} />
      </div>
    )
  );
}

export default PostContent;
