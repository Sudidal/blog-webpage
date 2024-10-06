import blogApi from "../blogAPI.js";
import { useEffect, useState } from "react";
import PostsList from "../components/posts/postsList/postsList.jsx";
import LoadingDisplay from "../components/loadingDisplay/loadingDisplay.jsx";

function AllPosts() {
  const [update, setUpdate] = useState(false);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    blogApi.getAllPosts().then((res) => {
      setLoading(false)
      if(res) {
        setPosts(res);
      }
      else {
        setError(true)
      }
    });
  }, [setPosts, update]);

  function updateComponent() {
    setUpdate(!update);
  }

  if (loading) {
    return <LoadingDisplay />
  } else if (error) {
    return <p>An error has occured</p>;
  } else if (posts?.length > 0) {
    return posts && <PostsList posts={posts} onPostDelete={updateComponent} />;
  }
  else {
    return <p>No posts yet, Be first to make one!</p>
  }
}

export default AllPosts;
