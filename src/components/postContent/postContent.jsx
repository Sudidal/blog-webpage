import blogApi from "../../../blogAPI.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentsList from "../commentsList/commentsList.jsx";

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
      <h3>Comments</h3>
        <CommentsList comments={post.comments} />
      </div>
    )
  );
}

export default PostContent;
