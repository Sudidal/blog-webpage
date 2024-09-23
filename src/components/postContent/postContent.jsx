import { getPost } from "../../../blogAPI.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PostContent() {
  const [post, setPost] = useState(null);

  const params = useParams();

  useEffect(() => {
    getPost(params.postId).then((res) => {
      setPost(res);
    });
  }, [params.postId]);

  return (
    post && (
      <div>
        <p>{post.content}</p>
      </div>
    )
  );
}

export default PostContent;
