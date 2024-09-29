import blogApi from "../blogAPI.js";
import PostsList from "../components/posts/postsList/postsList.jsx";
import { useEffect, useState } from "react";

function AllPosts() {
  const [update, setUpdate] = useState(false)
  const [posts, setPosts] = useState(null)
  useEffect(() => {
      blogApi.getAllPosts().then(res => {
        setPosts(res)
      });
  }, [setPosts, update])

  function updateComponent() {
    setUpdate(!update)
  }

  return (
    posts &&
    <PostsList posts={posts} onPostDelete={updateComponent} />
  )
}

export default AllPosts