import blogApi from "../../../blogAPI.js";
import PostsList from "../postsList/postsList.jsx";
import { useEffect, useState } from "react";

function AllPosts() {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
      blogApi.getAllPosts().then(res => {
        setPosts(res)
      });
  }, [setPosts])

  return (
    posts &&
    <PostsList posts={posts} />
  )
}

export default AllPosts