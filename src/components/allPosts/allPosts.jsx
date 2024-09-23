import {getAllPosts} from "../../../postsAPI.js";
import PostsList from "../postsList/postsList.jsx";

function AllPosts() {
  const posts = getAllPosts();

  return (
    <PostsList posts={posts} />
  )
}

export default AllPosts