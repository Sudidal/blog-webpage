import getPosts from "../../../mockPosts.js"
import PostsList from "./postsList/postsList.jsx"

function Posts() {
  const posts = getPosts()
  console.log(posts)

  return (
    <PostsList posts={posts}/>
  )
}

export default Posts