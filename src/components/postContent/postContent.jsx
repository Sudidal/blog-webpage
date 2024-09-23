import { getPost } from "../../../postsAPI.js";
import { useParams } from "react-router-dom";

function PostContent() {
  const params = useParams();

  const post = getPost(params.postId);

  return (
    <div>
      <p>{post.content}</p> <p>{post.id}</p>
    </div>
  );
}

export default PostContent;
